import React from 'react';

const layout = (props) => {
    
    return (
        <>
            <div>
                ToolBar, SideBar, BackDrop
            </div>
            <main>
                {props.children}
            </main>
        </>

    )
};

export default layout;