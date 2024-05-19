
const YouTube = ({embedId}) => {

        return (

            <div className="video-responsive">
                <iframe
                  width="570"
                  height="371"
                  src={`https://www.youtube.com/embed/${embedId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Embedded youtube"
                />
            </div>
        )
}

export default YouTube;