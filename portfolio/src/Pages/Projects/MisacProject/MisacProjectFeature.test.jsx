import { render, screen } from '@testing-library/react';
import MisacProjectFeature from './MisacProjectFeature';
import MisacHover from "../../../Videos/MisacHover.mp4";

test('Normal Misac Project Feature renders correctly', () => {
    const feature = {
        title:"Feature 1",
        description:"This is a test feature that hopefully works",
        video:MisacHover
    }

    render(<MisacProjectFeature feature={feature} index={0} isVisible={"true"}/>);

    const titleText = screen.getByText("Feature 1");
    expect(titleText).toBeInTheDocument();

    const descriptionText = screen.getByText(/test feature/i);
    expect(descriptionText).toBeInTheDocument();
});
test('Misac Project Feature renders with null text: title', () => {
    const feature = {
        title:null,
        description:"This is a test feature that hopefully works",
        video:MisacHover
    }

    render(<MisacProjectFeature feature={feature} index={0} isVisible={"true"}/>);

    const descriptionText = screen.getByText(/test feature/i);
    expect(descriptionText).toBeInTheDocument();
});
test('Misac Project Feature renders with null text: description', () => {
    const feature = {
        title:"Feature 1",
        description:null,
        video:MisacHover
    }

    render(<MisacProjectFeature feature={feature} index={0} isVisible={"true"}/>);

    const titleText = screen.getByText("Feature 1");
    expect(titleText).toBeInTheDocument();
});
test('Misac Project Feature renders with null source: video', () => {
    const feature = {
        title:"Feature 1",
        description:"This is a test feature that hopefully works",
        video:null
    }

    render(<MisacProjectFeature feature={feature} index={0} isVisible={"true"}/>);

    const titleText = screen.getByText("Feature 1");
    expect(titleText).toBeInTheDocument();
    const descriptionText = screen.getByText(/test feature/i);
    expect(descriptionText).toBeInTheDocument();
});
test('Misac Project Feature renders with non-int index', () => {
    const feature = {
        title:"Feature 1",
        description:"This is a test feature that hopefully works",
        video:null
    }

    render(<MisacProjectFeature feature={feature} index={"terrence"} isVisible={"true"}/>);

    const titleText = screen.getByText("Feature 1");
    expect(titleText).toBeInTheDocument();
    const descriptionText = screen.getByText(/test feature/i);
    expect(descriptionText).toBeInTheDocument();
});
test('Misac Project Feature renders with null index', () => {
    const feature = {
        title:"Feature 1",
        description:"This is a test feature that hopefully works",
        video:null
    }

    render(<MisacProjectFeature feature={feature} index={null} isVisible={"true"}/>);

    const titleText = screen.getByText("Feature 1");
    expect(titleText).toBeInTheDocument();
    const descriptionText = screen.getByText(/test feature/i);
    expect(descriptionText).toBeInTheDocument();
});
