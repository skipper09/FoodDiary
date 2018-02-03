import React from 'react'

export default function AboutDiv(props) {
    return (
            <div className="about-div" id={props.id}>
                <div className="about-photo">
                    <img src="http://via.placeholder.com/300x300" alt="placeholder" />
                </div>
                <div className="about-text">
                    <h3>{props.title}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ipsum facere, voluptates itaque ut nobis blanditiis, impedit nesciunt repellendus, cupiditate voluptate quis, molestias tenetur officia incidunt quam hic voluptatum quia numquam ipsam tempora! Facilis, quaerat saepe, ipsam cupiditate ab dolor placeat recusandae nulla. Error asperiores quibusdam ea perferendis officiis perspiciatis ut iste odio dolorum, hic saepe numquam quasi veritatis labore ipsum, mollitia! Quaerat a vitae voluptatibus sapiente tenetur illo culpa, incidunt fuga minus, labore, aliquid perferendis dicta accusantium sit? Ducimus.
                    </p>
                </div>
            </div>
    )
}