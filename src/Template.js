import React from 'react';

const Template = ({children}) => {
return (
    <div>
        <div>오늘의 할 일(0)</div>
        <div>여기에 할 일 목록이 들어감</div>
        <div>{children}</div>
    </div>
    );
};

export default Template;
 