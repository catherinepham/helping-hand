import React from "react";
import styled from "styled-components";
import closeIcon from "../../close.png";

const Icon = styled.img`
    width: 24px;
    margin-right: 15px;
    cursor: pointer;
    `;

const Wrapper = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
  background-color: #d9badf;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justift-content: space-between;
  `;

const Item = ({ student, removestudent }) => {
    return <Wrapper> <Icon src={closeIcon} onClick={() => { removestudent(student.id);
    }}
    />
        {student.id} {student.message} {student.class}
    
    </Wrapper>;
    
}

export default Item;