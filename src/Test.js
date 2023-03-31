import React from "react";
import "./Test.css";

// Index.js(주석 유무로 활용하기)에서 테스트로 연결한 Test.js
// z-index 설정없으면 기본값은 0 , 나중에 적은 코드가 우선해서 위로 뜬다
// z-index를 second에 대략적으로 큰수5를 주면 second가 가장 위로 뜬다
// 부모태그 wrap, wrap2가 자식태그보다 우선한다.
// 즉 부모div박스 wrap2에 z-index:2가 (second자식div) z-index:5 보다 우선
function Test(){

    return(
     <>
        <div className="wrap">
            <div>first</div>
            <div>second</div>
            <div>third</div>
        </div>
        {/* <div className="wrap2">
        </div> */}
     </>
    )
}

export default Test;