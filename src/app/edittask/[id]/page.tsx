"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const EditTask = (params: any) => {

    const Id = params.params.id
    const [ formField, setFormField ] = useState("")

    const router = useRouter()

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormField(prev => value);
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch(`https://hr-todo.sahda.ir/update.php`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({
                id: Id,
                item: formField
            })
        })

        if(res.status == 200 ) {
            router.push('/')
            router.refresh()
        }
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-white">
                <div>
                    Task Number: {Id}
                </div>

                <form onSubmit={handleFormSubmit}>

                     <input
                        type="text"
                        className=" text-black"
                        value={formField}
                        onChange={handleInputChange}
                        placeholder="enter some text"
                     >

                     </input>   
                    <button>
                        Edit
                    </button>

                </form>
            </div>
            
        </div>
    )
}

export default EditTask