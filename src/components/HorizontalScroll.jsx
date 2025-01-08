import { useRef } from 'react';

// HorizontalScroll component allows for horizontal scrolling by dragging the mouse.
export default function HorizontalScroll({ children, className, style }) {
    
    // Create a reference to the scrollable container.
    const scrollRef = useRef();

    // Function to handle the scroll behavior when the mouse is pressed down.
    function handleScroll(e) {

        // Store the initial X position of the mouse when the scroll starts.
        const oldX = e.pageX;

        // Store the current scroll position of the container.
        const scrollLeft = scrollRef.current.scrollLeft;

        // Function to handle mouse movement while scrolling.
        const handleMouseMove = (e) => {
            // Calculate the new X position of the mouse.
            const newX = e.pageX;

            // Calculate the offset between the old and new X positions.
            const offset = newX - oldX;

            // Update the scroll position of the container based on the offset.
            scrollRef.current.scrollLeft = scrollLeft - offset;
        }

        // Function to handle the mouse release event.
        const handleMouseUp = () => {
            // Remove the mousemove and mouseup event listeners when the mouse is released.
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        // Add event listeners for mousemove and mouseup to handle scrolling.
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    // Render the scrollable container with the provided children, className, and style.
    return (
        <div className={className} style={style} ref={scrollRef} onMouseDown={handleScroll}>
            {children}
        </div>
    )
}