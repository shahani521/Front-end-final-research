
import {createContext,useState} from "react";

export const FormContext = createContext();

export const ContexProvider = ({children}) => {

    const [Route, setRoute] = useState("Negambo - Colombo");
    const [timeslot, setTimeslot] = useState("6.00 - 8.00");
    const [Buscrowd, setBuscrowd] = useState("low");
    const [ availablebuses, setAvailablebuses] = useState("0");
    const [typeofbus, setTypeofbus] = useState("normal");
    const [dayname, setDayname] = useState("Sunday");
    const [isWeekday, setIsWeekday] = useState("no");
    const [daytype, setDaytype] = useState("normal");
    const [isHoliday, setIsHoliday] = useState("yes");
    const [trafic, setTrafic] = useState("low");
    const [available_bus_drivers, setAvailable_bus_drivers] = useState("enough");
    const [weather, setWeather] = useState("normal");
    const [ route_condition, setRoute_condition] = useState("good");
    const [busyreason, setBusyreason] = useState("normal");
    
  
    const [date, setDate] = useState(null);

    const[result,SetResult] = useState(null);
    const[validateP1,setValidateP1] = useState(false);
    const[validateP2,setValidateP2] = useState(false);
    const[validateP3,setValidateP3] = useState(false);
    const[isLoading,setIsLoading] = useState(false);


    const [Comments, SetComments] = useState([
        {
          id: 1,
          name: "Dasun Sennath",
          link: "https://via.placeholder.com/128/cc99ff/7f00ff.png?text=D",
          day: "2",
          Comment:
            "The buses arrive earlier than the schelued time and therefore passengers are confused about the bus arrival time .",
          like: "12",
          dislike: "2",
        },
        {
          id: 2,
          name: "Buddhika Senanayake",
          link: "https://via.placeholder.com/128/99ccff/0073e6.png?text=B",
          day: "2",
          Comment:
            "These buses are not very crowded and therefore are safe to travel in as they prevent diseases from spreading.",
          like: "12",
          dislike: "2",
        },
        {
          id: 3,
          name: "Oshan Perera",
          link: "https://via.placeholder.com/128/ffcc99/ff8000.png?text=O",
          day: "2",
          Comment:
            "The buses can accommodate more users by fixing additional seats as the buses are very crowded during rush hour traffic.",
          like: "12",
          dislike: "2",
        },
        {
          id: 4,
          name: "Susan Doe",
          link: "https://via.placeholder.com/128/cc99ff/7f00ff.png?text=S",
          day: "2",
          Comment:
            "These buses that are crowded make us more prone to communicable diseases.",
          like: "12",
          dislike: "2",
        },
      ]);

      const[resultModel,setResultModel] = useState(false);
      const[reviewFinal,setreviewFinal] = useState("");
      const[PostComment,setPostComment] = useState({});

      const addnewComment = (newComment) => {
        SetComments([newComment, ...Comments]);
        localStorage.setItem("Comments", JSON.stringify([newComment, ...Comments]));
      };


      const getday = (date) => {
        var day = new Date(date).getDay();
        var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
        if(day === 0 || day === 6){
          setIsWeekday("no");
        }else{
          setIsWeekday("yes");
        }

        if(day === 0 || day === 6|| daytype !== "normal"){
          setIsHoliday("yes");
        }else{
          setIsHoliday("no");
        }
        return {
          day: daylist[day],
          isWeekday: isWeekday,
          isHoliday: isHoliday,
        }
      };

      const GenerateResult = (e) => {

        e.preventDefault();
        setIsLoading(true);
      
       
          // dayname,
            // isWeekday,
            // daytype,
            // isHoliday,
         const day_result  = getday(date);

        const request={
            Route,
            timeslot,
            Buscrowd,
            availablebuses,
            typeofbus,
            date,
            dayname: day_result.day,
            isWeekday: day_result.isWeekday,
            isHoliday: day_result.isHoliday,
            daytype,
            trafic,
            available_bus_drivers,
            weather,
            route_condition,
            busyreason
        }
    
        console.log(request);
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        };

       
        setTimeout(() => {
          fetch('https://sl-bus-shedule.herokuapp.com/di', requestOptions)
          .then(response => response.json())
          .then(data => {
            SetResult(data)
            // console.log(data);
            setIsLoading(false);
          setResultModel(true);
          });
          
          
      }, 2000);
        // SetResult(data)
          
        return true;
  
      }


    return (
        <FormContext.Provider
        value={{
            validateP1,
            validateP2,
            validateP3,
            result,
            isLoading,
            Comments,
            SetComments,
            resultModel,
            PostComment,
            reviewFinal,
            setreviewFinal,
            setResultModel,
            setPostComment,
            addnewComment,
            setValidateP1,
            setValidateP2,
            setValidateP3,
            SetResult,
            setIsLoading, 
            
            

            Route,
            setRoute,
            timeslot,
            setTimeslot,
            Buscrowd,
            setBuscrowd,
            availablebuses,
            setAvailablebuses,
            typeofbus,
            setTypeofbus,
            dayname,
            setDayname,
            isWeekday,
            setIsWeekday,
            daytype,
            setDaytype,
            isHoliday,
            setIsHoliday,
            trafic,
            setTrafic,
            available_bus_drivers,
            setAvailable_bus_drivers,
            weather,
            setWeather,
            route_condition,
            setRoute_condition,
            busyreason,
            setBusyreason,
            GenerateResult,
            Date,
            setDate,
        }}
        >
       {children}
        </FormContext.Provider>

    )

}