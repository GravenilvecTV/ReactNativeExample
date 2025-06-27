
export default function CustomVideo ({title, id}) {
    return (
        <div>
            <h1>{title}</h1>
            <iframe 
                width="560" height="315" 
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}