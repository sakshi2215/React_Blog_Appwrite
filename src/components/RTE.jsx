import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from '../conf/conf';



export default function RTE({name, control, label,
    defaultValue=""
}){
    return(
    
     <div className="w-full">
        {label && <label className="text-sm text-grey-600">
            {label}
            </label>}
        <Controller
        name= {name || "Content"}
        control={control}
        render= {
            ({field:{onChange}})=>(
                <Editor
                apiKey={conf.timymceapiKey}
                initialValue={defaultValue}
                init = {{
                    height:500,
                    menubar: false,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar:
                   "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                
                onEditorChange={onChange}

                />
            )
        }
        />
     </div>   
    )
}