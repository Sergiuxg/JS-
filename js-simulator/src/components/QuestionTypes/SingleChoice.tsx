import type { Question } from "../../types/Question";

interface Props {

    question: Question;

    value: number | null;

    onChange: (value:number)=>void;

}

const SingleChoice = ({
    question,
    value,
    onChange
}:Props)=>{

    return(

        <div>

            <h2 className="text-2xl font-bold mb-8">

                {question.question}

            </h2>

            <div className="space-y-4">

                {question.options?.map((option,index)=>{

                    const selected=value===option.id;

                    return(

                        <button

                            key={option.id}

                            onClick={()=>onChange(option.id)}

                            className={`
                            w-full
                            p-5
                            rounded-xl
                            border-2
                            text-left
                            transition

                            ${
                                selected
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "bg-white hover:border-indigo-500"
                            }
                            `}
                        >

                            {String.fromCharCode(65+index)}.
                            {" "}
                            {option.text}

                        </button>

                    )

                })}

            </div>

        </div>

    )

}

export default SingleChoice;