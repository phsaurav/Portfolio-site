import s from "csd";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BackendSkills from "./BackendSkills/BackendSkills";
import DevOpsSkills from "./DevOpsSkills/DevOpsSkills";
import FrontendSkills from "./FrontendSkills/FrontendSkills";

const StyledTabIndicator = styled.div`
    position: absolute;
    width: ${(props) => 100 / props.tabCount}%;
    top: 100%;
    left: 0;

    transform: translate(${(props) => props.offset}, -100%);

    transition: transform ${(props) => props.duration}ms;

    border-top-style: solid;
    border-top-width: 1px;
`;

const StyledTab = styled.li`
    flex: 1;
    height: 100%;

    button {
        cursor: pointer;
        transition: color 0.3s;
        color: ${(props) => (props.isFocused ? "#222" : "#777")};
        border: none;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0);
    }
`;

export const Tab = ({ title, onClick, isFocused }) => {
    return (
        <StyledTab onClick={onClick} isFocused={isFocused}>
            <button
                className={`${
                    isFocused ? "text-brand-2" : "text-gray-700"
                } hover:text-brand-2 text-lg font-light uppercase md:text-xl `}
            >
                {title}
            </button>
        </StyledTab>
    );
};

const StyledTabs = styled.div`
    position: relative;
    list-style: none;
    height: 30px;
    ${s.row}
`;

const Tabs = ({ focusedIdx, children, onChange, duration = 500 }) => {
    return (
        <StyledTabs>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, {
                    key: i,
                    isFocused: focusedIdx === i,
                    onClick: (e) => {
                        onChange(i);
                    },
                })
            )}
            <StyledTabIndicator
                duration={duration}
                tabCount={children.length}
                offset={`${100 * focusedIdx}%`}
            />
        </StyledTabs>
    );
};
const StyledOuterSliders = styled.div`
    overflow: hidden;
`;
const StyledSliders = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    width: 100%;

    transform: translateX(${(props) => `${props.offset}%`});
    transition: transform ${(props) => props.duration}ms;

    div {
        flex-shrink: 0;
        width: 100%;
    }
`;

const Sliders = ({ focusedIdx, children, duration = 500 }) => {
    const offset = -100 * focusedIdx;

    return (
        <StyledOuterSliders>
            <StyledSliders offset={offset} duration={duration}>
                {children}
            </StyledSliders>
        </StyledOuterSliders>
    );
};

const Pane1 = () => {
    return <FrontendSkills />;
};
const Pane2 = () => {
    return <BackendSkills />;
};
const Pane3 = () => {
    return <DevOpsSkills />;
};
const Skills = () => {
    const [focusedIdx, setFocusedIdx] = React.useState(0);
    const [clicked, setClicked] = React.useState(false);
    const idxRef = useRef(focusedIdx);
    idxRef.current = focusedIdx;

    useEffect(() => {
        let interval;
        if (!clicked) {
            interval = setInterval(() => {
                setFocusedIdx((currIdx) => (currIdx + 1) % 3);
            }, 4000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [clicked]);
    // const timer = setInterval(() => {
    //     setFocusedIdx((value) => (value + 1) % 3);
    //     console.log(focusedIdx);
    // }, 3000);
    // useTimeout(() => {
    //     setFocusedIdx((value) => (value + 1) % 3);
    //     console.log(focusedIdx);
    // }, 1000);

    return (
        <>
            <h1 className='text-brand-3 mt-10 mb-2 text-2xl font-light uppercase md:text-3xl'>
                Development Skills & Tools
            </h1>
            <div className='flex justify-center'>
                <div className='border-brand-3 mb-8 h-px w-20 border-b'></div>
            </div>
            <div className='container mx-auto items-center justify-center '>
                <div className='w-full xl:mx-auto xl:w-1/2'>
                    <Tabs
                        focusedIdx={focusedIdx}
                        onChange={(i) => {
                            setFocusedIdx(i);
                            setClicked(true);
                        }}
                    >
                        <Tab title='Frontend Skills' />
                        <Tab title='Backend Skills' />
                        <Tab title='DevOps & Tools' />
                    </Tabs>
                </div>

                <div className='mt-6 w-full xl:mx-auto xl:w-10/12'>
                    <Sliders focusedIdx={focusedIdx}>
                        <Pane1 />
                        <Pane2 />
                        <Pane3 />
                    </Sliders>
                </div>
            </div>
        </>
    );
};

export default Skills;
