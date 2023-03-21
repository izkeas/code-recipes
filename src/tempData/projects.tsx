import ReactCounter from "./code/ReactCounter"
import BinarySearch from "./code/BinarySearch"


export interface ProjectObj{
    name : string;
    description : string;
    code : string;
    implementationSteps : string[];
    imageURL? : string;
    useCases ? : string[];
    references? : string[];
};

const projects  : ProjectObj[] = [
    {
        name : "React Counter",
        description : "An react implementation of a counter, it uses React Componenent States and Components events to update the state of the counter.",
        imageURL : "/ProjectImages/ReactCounter.png",

        code : ReactCounter,

        implementationSteps : [
            "Create an State called counter.",
            "Create the button and the counter interface elements.",
            "Increment counter when user clicks the button"
        ],

        useCases : [
            "Learn about states and events of React.js",
            "Shopping cart application to count the number of items added to the cart",
            "Online voting application to count the number of votes for a candidate",
            "Traffic monitoring application to count the number of vehicles passing through a particular intersection",
            "others ..."
        ]
    },
    {
        name : "Binary Search",
        description : "React Implementation of binary search.",
        imageURL : "/ProjectImages/BinarySearch.png",

        code :BinarySearch,
        
        implementationSteps : [
            "Sort the array in ascending order.",
            "Set the low index to the first element of the array and the high index to the last element.",
            "Set the middle index to the average of the low and high indices.",
            "If the element at the middle index is the target element, return the middle index.",
            "If the target element is less than the element at the middle index, set the high index to the middle index – 1.",
            "If the target element is greater than the element at the middle index, set the low index to the middle index + 1.",
            "Repeat steps 3-6 until the element is found or it is clear that the element is not present in the array."
        ],
        useCases :[
            
        ]
    }
]


export default projects;