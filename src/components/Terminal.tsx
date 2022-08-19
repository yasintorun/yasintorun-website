import React, { useRef } from "react";

const Terminal = (): React.ReactElement => {
    const inputRef = useRef<any>(null);



    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="terminal-header-buttons">
                    <button disabled className="terminal-header-button close-btn"></button>
                    <button className="terminal-header-button minimize-btn"></button>
                    <button className="terminal-header-button maximize-btn"></button>
                </div>
                <div className="terminal-header-title">
                    <a href="https://github.com/yasintorun" target={"_blank"}>@yasintorun</a>
                </div>
            </div>
            <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
                <div className="terminal-body-content">
                    <div className="terminal-body-content-command">
                        <span className="terminal-prefix">~ {"> "} </span>
                        <input ref={inputRef} type="text" autoFocus maxLength={90} />
                    </div>
                    <div className="terminal-body-content-output">
                        <p>
                            <ul>
                                <li>Test</li>
                                <li>Tedst</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Te1sst</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Teasdstsd</li>
                                <li>Test</li>
                                <li>Teqwest</li>
                                <li>Tesqt</li>
                                <li>Tasdest</li>
                                <li>Test</li>
                                <li>Te123st</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Tea12sdst</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Te123st</li>
                                <li>Test</li>
                                <li>asdTest</li>
                                <li>Test</li>
                                <li>Test</li>
                                <li>Testasd</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal