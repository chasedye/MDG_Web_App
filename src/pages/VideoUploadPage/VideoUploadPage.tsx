import { useState } from "react";
import axios from "axios";
import style from "./VideoUploadPage.module.css";

export default function VideoUploadPage() {

    function CurrentDate() {
        const today: Date = new Date();
        // Formats based on user's locale (e.g., "11/27/2026")
        const formattedDate: string = today.toLocaleDateString();
        return formattedDate;
    }

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    return(
        <section className={`page ${style.uploadSection}`}>
            <div className= {`${style.fileUpload}`} >
                <label>Video File:</label>
                <input type="file" onChange={(e) => {setSelectedFile(e.target.files?.[0] ?? null)}} />
            </div>
            <div className= {`${style.setTitle}`} >
                <label>Title: </label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className= {`${style.setDescription}`} >
                <label>Description: </label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className= {`${style.setCategory}`} >
                <label>Category:</label>
                <input value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className={`${style.date}`}>
                <label>Upload Date:{CurrentDate()}</label>
            </div> 
            <button className={`${style.uploadBtn}`}>
                Upload
            </button>
        </section>
    );
}