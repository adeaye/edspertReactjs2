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

const courseService = {
  getAllCourse: getCourses,
  addCourse,
};

export default courseService;
