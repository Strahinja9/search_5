
const VIDEOS = [
    {
        id:1,
        title: 'video 1',
        urs: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        cover: 'https://picsum.photos/200/300'
    }
];
const AllVideos = () => {
    return (
        VIDEOS.map(video => {
            return <div key={video.id}>
                <h1>{video.title}</h1>
                <img src={video.cover} alt={video.title} />
                <a href={video.urs}>Watch</a>
            </div>
        }))
}

export default AllVideos