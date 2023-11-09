export const MSG_COMMON = {
    MSG_ERROR: {
      server: "Internal Server Error",
      not_page: "Page Not Found",
      auth: "Invalid Authentication",
    },
    MSG_SUCCESS: {
      get_data: "Get data successfully",
      update_data: "Update data successfully",
      delete_data: "Delete data successfully",
      create_data: "Create data successfully",
    },
    MSG_INFO: (info) => {
      return {
        not_data: info + "not found",
      };
    },
  };
  
  export const MSG_001 = {};
  export const MSG_002 = {};
  export const MSG_003 = {};