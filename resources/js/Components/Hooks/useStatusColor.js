const StatusColor = (status) => {
    switch (status) {
        case "Pending":
            return "text-yellow-500";
        case "Success":
            return "text-green-500";
        case "Ditolak":
            return "text-red-500";
        default:
            return "";
    }
}; 

export default StatusColor