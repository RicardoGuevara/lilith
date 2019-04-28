import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import ReactNotifications from 'react-browser-notifications';

import * as cons from '../../res/values/constants'

// import 'typeface-roboto';
class TestPage extends React.Component {
    /*function get_post_desc() {
      return (

      );

  }*/
    constructor(props) {
        super(props);
        this.state = {
            multiline: ''
        }
        this.showNotifications = this.showNotifications.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    showNotifications() {
        // If the Notifications API is supported by the browser
        // then show the notification
            if (this.n.supported()) this.n.show();
    }

    handleClick(event) {
        // Do something here such as
        // console.log("Notification Clicked") OR
        // window.focus() OR
        // window.open("http://www.google.com")

        // Lastly, Close the notification
        this.n.close(event.target.tag);
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    render() {

        return (

            <div className="post">
                <Button variant="contained" onClick={() => (cons.ServerTest)}>
                    <Typography>
                        Texto
                    </Typography>
                </Button>
                <ReactNotifications
                    onRef={ref => (this.n = ref)} // Required
                    title="Hello" // Required
                    body="This is the body"
                    icon="icon.png"
                    tag="abcdef"
                    onClick={event => this.handleClick(event)}
                />

                <Button onClick={this.showNotifications}>
                    Notify Me!
                </Button>
            </div>

        );
    }
}

export default TestPage;