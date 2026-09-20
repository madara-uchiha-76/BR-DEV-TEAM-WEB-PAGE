/*
  Animation Gallery
  100 animation definitions
*/

const ANIMATION_TYPES = [
  { id: "fade-in", name: "Fade In", category: "Entrance", description: "Opacity gradually increases." },
  { id: "fade-out", name: "Fade Out", category: "Exit", description: "Opacity gradually decreases." },
  { id: "slide-in-left", name: "Slide In Left", category: "Entrance", description: "Slides in from the left." },
  { id: "slide-in-right", name: "Slide In Right", category: "Entrance", description: "Slides in from the right." },
  { id: "slide-in-up", name: "Slide In Up", category: "Entrance", description: "Slides upward into view." },
  { id: "slide-in-down", name: "Slide In Down", category: "Entrance", description: "Slides downward into view." },
  { id: "slide-out-left", name: "Slide Out Left", category: "Exit", description: "Slides left and disappears." },
  { id: "slide-out-right", name: "Slide Out Right", category: "Exit", description: "Slides right and disappears." },
  { id: "slide-out-up", name: "Slide Out Up", category: "Exit", description: "Slides upward and disappears." },
  { id: "slide-out-down", name: "Slide Out Down", category: "Exit", description: "Slides downward and disappears." },
  { id: "zoom-in", name: "Zoom In", category: "Entrance", description: "Scales up into view." },
  { id: "zoom-out", name: "Zoom Out", category: "Exit", description: "Scales down and disappears." },
  { id: "zoom-in-bounce", name: "Zoom In Bounce", category: "Entrance", description: "Zooms in with a bounce." },
  { id: "zoom-out-bounce", name: "Zoom Out Bounce", category: "Exit", description: "Zooms out with a bounce." },
  { id: "bounce", name: "Bounce", category: "Attention", description: "Bounces vertically." },
  { id: "bounce-in", name: "Bounce In", category: "Entrance", description: "Enters with a bounce." },
  { id: "bounce-in-left", name: "Bounce In Left", category: "Entrance", description: "Bounces in from the left." },
  { id: "bounce-in-right", name: "Bounce In Right", category: "Entrance", description: "Bounces in from the right." },
  { id: "bounce-in-up", name: "Bounce In Up", category: "Entrance", description: "Bounces upward into view." },
  { id: "bounce-in-down", name: "Bounce In Down", category: "Entrance", description: "Bounces downward into view." },
  { id: "pulse", name: "Pulse", category: "Attention", description: "Gently grows and shrinks." },
  { id: "heartbeat", name: "Heartbeat", category: "Attention", description: "Beats like a heart." },
  { id: "flash", name: "Flash", category: "Attention", description: "Flashes repeatedly." },
  { id: "flicker", name: "Flicker", category: "Attention", description: "Flickers irregularly." },
  { id: "shake", name: "Shake", category: "Attention", description: "Shakes side to side." }
];
