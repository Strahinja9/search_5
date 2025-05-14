
import VIDEOS from "/videos.json"
import "../assets/Video.css"
const AllVideos = () => {
    return (
        VIDEOS.map(video => {
            return <div key={video.id}>
                <h1>{video.title}</h1>
                <a href={video.url} target='_blank'>{video.url}</a>
                <br/>
                <iframe width="560" height="315" src={video.embed}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>

            </div>
        }))
}

export default AllVideos