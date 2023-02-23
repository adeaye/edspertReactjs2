import storageManager from "./storageManagement";

const addCourse = (payload) => {
  const currItem = storageManager.get();
  if (currItem !== null) {
    const combinedItem = [...currItem, payload];
    storageManager.set(combinedItem);
  } else {
    storageManager.set([payload]);
  }

  return {
    data: payload,
  };
};

const getCourses = () => {
  const result = storageManager.get();
  const response = {
    data: result !== null ? result : [],
    meta: {
      count: result !== null ? result.length : 0,
    },
  };
  return response;
};

const updateCourse = (courseId, payload) => {
  const listCourse = storageManager.get();
  const updatedCourse = listCourse.map((item) => {
    if (item.id === courseId) {
      return {
        ...item,
        ...payload,
      };
    }
    return item;
  });

  storageManager.set(updatedCourse);
  return {
    data: payload,
  };
};

const deleteCourse = (courseId) => {
  const listCourse = storageManager.get();
  const newList = listCourse.filter((item) => item.id !== courseId);

  storageManager.set(newList);
};
const courseService = {
  getAllCourse: getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};

export default courseService;
