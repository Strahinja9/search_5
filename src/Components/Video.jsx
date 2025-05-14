import {useParams} from "react-router";
import VIDEOS from "/videos.json"

const Video = () => {

    const { id} = useParams();

    const videoFound = VIDEOS.find(video => video.id == id)

    if(!videoFound) return <h1>Video not found</h1>
        // console.log(videoFound);







    return (

        <>
            <div key={videoFound.id}>
                <h1>{videoFound.title}</h1>
                <a href={videoFound.url} target='_blank'>{videoFound.url}</a>
                <br/>
                <iframe width="560" height="315" src={videoFound.embed}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>

            </div>

        </>
    )
}

export default Video;