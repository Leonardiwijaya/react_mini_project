import { useState } from "react";
import OpenAI from "openai";
import styles from "../assets/css/style.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Chat() {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const [history, setHistory] = useState([]);

  const handleClick = async () => {
    setChats([
      ...chats,
      {
        q: prompt,
        a: null,
      },
    ]);
    setHistory([
      ...history,
      {
        role: "user",
        content: prompt,
      },
    ]);

    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        messages: [
          ...history,
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0.5,
        max_tokens: 100,
      });
      setChats([
        ...chats,
        {
          q: prompt,
          a: response.choices[0].message.content,
        },
      ]);
      setHistory([
        ...history,
        {
          role: "user",
          content: prompt,
        },
        {
          role: "assistant",
          content: response.choices[0].message.content,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className={styles["chat-box-container"]}>
        <h3>ChatBot Fuku</h3>
        <div className={styles["chat-box"]}>
          {chats.map((chat) => {
            return (
              <>
                <p className={styles["question"]}>Q: {chat["q"]}</p>
                <p className={styles["answer"]}>
                  A:
                  {chat["a"] ? (
                    ` ${chat["a"]}`
                  ) : (
                    <div
                      className={`spinner-border text-success ${styles["loading"]}`}
                      role="status"
                    ></div>
                  )}
                </p>
              </>
            );
          })}
        </div>
        <div className={styles["chat-container"]}>
          <textarea
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Send a message"
            className={`${styles["textarea-box"]}`}
            style={{ width: "400px", height: "100px" }}
          ></textarea>
          <button
            onClick={handleClick}
            disabled={loading || prompt.length === 0}
            className={styles["chat-button"]}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
