import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { color } from '../theme';

const Container = styled.div`
  position: absolute;
  bottom: 50px;
  right: 32px;
  display: flex;
  flex-direction: column;
  width: 300px;
  align-self: end;
  background: #000;
  padding: 8px;

  h2 {
    color: ${color.white};
    font-size: 14px;
    margin: 0 0 8px 0;
  }

  textarea {
    border: 0;
    background: ${color.black};
    width: 100%;
    height: 100px;
    color: ${color.white};
    margin: 0;
    resize: none;
    padding: 4px;
    outline: none;
  }

  button {
    background: none; 
    color: #25FFCB;
    margin: 4px;
    align-self: end;
    cursor: pointer;
  }
`;

const MessageItems = styled.div`
  font-size: 12px;
  height: 200px;
  overflow-y: auto;
  padding-bottom: 16px;

  &::-webkit-scrollbar {
    background-color: #25FFCB;
    /* border-left: 3px solid black; */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.black};
  }

  &::-webkit-scrollbar-button {
    background-color: ${color.black};
  }
`;

const MessageItem = styled.div`
  padding: 4px;
  color: #25FFCB;
  margin-bottom: 4px;
`;

export interface Message {
  id: string;
  content: string;
}

type MessageBoardProps = {
  cyberLogMessages: any;
};

const MessageBoard = ({cyberLogMessages}) => {
  const [messages, setMessages] = useState(cyberLogMessages);
  const [content, setContent] = useState('');
  const messagesEndRef = useRef(null);

  const messageItems = messages.map(({ message }) => (
    <MessageItem key={message}>{`> `}{message}</MessageItem>
  ));

  useEffect(() => {
    scrollToBottom()
  }, [messageItems]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value);
  };

  const handleClick = async (): Promise<void> => {
    const updatedMessages = [...messages, {
      message: content
    }];

    setMessages(updatedMessages);
    setContent('');
  };

  return (
    <Container>
      <h2>cyberGreet terminal</h2>
      <MessageItems>{ messageItems }</MessageItems>
      <textarea value={content} onChange={handleOnChange} placeholder="Leave a greeting!"></textarea>
      <button onClick={handleClick}>post</button>
    </Container>
  );
}

export default MessageBoard;