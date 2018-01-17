import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const widhAdminWaring = (WrappComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappComponent {...props}/>
             ) : (
                 <p>Please login</p>
             )}
        </div>
    )
};

const AdminInfo = widhAdminWaring(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDom.render(<AdminInfo isAdmin={false} info="Details" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="Details" />, document.getElementById('app'));