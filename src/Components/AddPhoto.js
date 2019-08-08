import React, { Component } from 'react';

class Addphoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const imagelink = event.target.elements.link.value;

        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imagelink
        }
        if (description && imagelink) {
            this.props.startAddingPost(post)
            this.props.onHistory.push('/')
        }
    }
    render() {
        return (
            <div>

                <div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button >Post</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Addphoto;