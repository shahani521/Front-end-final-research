import { useState , createContext} from "react";

export const Context = createContext();
export const ContextProvider = ({children}) => {
  const [Comments, SetComments] = useState([
    {
      id: 1,
      name: "John Doe",
      letter: "JD",
      day: "2",
      Comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc urna ultricies nunc, eget ultricies lorem ipsum eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc urna ultricies nunc, eget ultricies lorem ipsum eu nunc.",
      like: "12",
      dislike: "2",
    },
    {
      id: 2,
      name: "John Doe",
      letter: "JD",
      day: "2",
      Comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc urna ultricies nunc, eget ultricies lorem ipsum eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc urna ultricies nunc, eget ultricies lorem ipsum eu nunc.",
      like: "12",
      dislike: "2",
    },
    {
      id: 3,
      name: "John Doe",
      letter: "JD",
      day: "2",
      Comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc urna ultricies nunc, eget ultricies lorem ipsum eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc urna ultricies nunc, eget ultricies lorem ipsum eu nunc.",
      like: "12",
      dislike: "2",
    },
    {
      id: 4,
      name: "John Doe",
      letter: "JD",
      day: "2",
      Comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc urna ultricies nunc, eget ultricies lorem ipsum eu nunc. Sed euismod, nunc ut aliquam aliquam, nunc urna ultricies nunc, eget ultricies lorem ipsum eu nunc.",
      like: "12",
      dislike: "2",
    },
  ]);

  const value = {
    Comments,
    SetComments,
  };


  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
