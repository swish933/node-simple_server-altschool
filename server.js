const http = require("http");

const PORT = 8900;

function requestHandler(_, response) {
	response.end("Nomso Ikem");
}
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
	console.log(`server running at port ${PORT}`);
});
