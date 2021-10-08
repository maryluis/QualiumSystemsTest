export const ItemCart = ({item}) => {

    return(
        <div className="flex column spaceBetween width250px padding15 alignCenter darkBorder">
            <h5>{item.title}</h5>
            <img width="70px" src="https://images.zakupka.com/i3/firms/27/48/48890/matovye-vkladki-fellowes-neato-v-korobki-simline-dlya-cd-dvd-diskov-f-84498_06174341e4f0b1e_200x200.jpg" alt="img"/>
            <span>{item.price}$</span>
            <p className="smallLetters heignt230px">{item.description}</p>
            <button className="darkButton whiteColor">Want!</button>
        </div>
    )
}