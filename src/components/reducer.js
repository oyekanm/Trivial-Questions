export const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTIONS": {
      return { ...state, questions: action.payload };
    }
    case "AMOUNT": {
      return {
        ...state,
        amount: action.payload,
      };
    }
    case "TYPE": {
      return {
        ...state,
        type: action.payload,
      };
    }
    case "LEVEL": {
      return {
        ...state,
        level: action.payload,
      };
    }
    case "START": {
      return {
        ...state,
        start: false,
      };
    }
    case "SETERROR": {
      return {
        ...state,
        error: false,
      };
    }
    case "RESETERROR": {
      return {
        ...state,
        error: true,
      };
    }
    case "ERROR": {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case "RESETSHOW": {
      return {
        ...state,
        show: false,
      };
    }
    case "SHOW": {
      return {
        ...state,
        show: true,
      };
    }
    case "RESETQUESTION": {
      return { ...state, questions: [], start: true };
    }
  }
  return state;
};
