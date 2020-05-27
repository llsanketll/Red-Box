export default function easeLinear (timeStamp, startPoint, endPoint, duration) {
    return endPoint * timeStamp / duration + startPoint;
}