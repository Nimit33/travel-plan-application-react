import Card from './Card'
function Tours({ tours, removeTour }) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        // tours ke har ek single data ko card naam ke componenet se match kr rhe hai,loop chala tourse ke andar ke array pe
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        //tour.id yeh key pass hogi
                    })
                }
            </div>
        </div>
    );
}

export default Tours;