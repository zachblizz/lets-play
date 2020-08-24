import moment from "moment";

export default function formatDate(timestamp: number) {
    const t = moment(timestamp);
    return t.fromNow();
}