const http = require('http');

// Helper function to send an automated booking request to our server
function simulationRequest(email, telemetry) {
    return new Promise((resolve) => {
        const payload = JSON.stringify({
            email: email,
            itemId: 1, // Target ID pointing directly to the Hackathon Event we created
            telemetryData: telemetry
        });

        const options = {
            hostname: 'localhost',
            port: 5000,
            path: '/api/book-ticket',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                console.log(`\n[SIMULATION RESPONSE FOR: ${email}]`);
                console.log(`HTTP Status: ${res.statusCode}`);
                console.log(`Payload Recieved:`, JSON.parse(body));
                resolve();
            });
        });

        req.on('error', (e) => {
            console.error(`Simulation Connection Failure: ${e.message}`);
            resolve();
        });

        req.write(payload);
        req.end();
    });
}

// EXECUTE DUAL SCENARIO STRESS TEST
async function runLiveTest() {
    console.log("==================================================");
    console.log("⚡ INITIATING LIVE SCALPGUARD BEHAVIORAL FIREWALL TEST");
    console.log("==================================================");

    // SCENARIO A: THE AUTHENTIC HUMAN USER
    // Behavior: Low volume profile, lingering site duration, high typing layout organic variance
    const humanTelemetry = { requestCount: 2, timeWindowMs: 45000, keystrokeVariance: 0.88 };
    
    // SCENARIO B: THE AUTOMATED AGGRESSIVE SCALPER BOT
    // Behavior: Massive burst traffic profile, instant lightning-fast submission, absolute zero structural typing variance
    const scalperBotTelemetry = { requestCount: 45, timeWindowMs: 200, keystrokeVariance: 0.01 };

    console.log("\n▶ Step 1: Simulating Genuine Human Booking Request...");
    await simulationRequest('sushma.authentic.buyer@gmail.com', humanTelemetry);

    console.log("\n▶ Step 2: Simulating Malicious Scalper Bot High-Frequency Assault...");
    await simulationRequest('bot-net-attacker-v4_node9@scalperops.net', scalperBotTelemetry);
    
    console.log("\n==================================================");
    console.log("🛡️ SIMULATION COMPLETION POINT");
    console.log("==================================================");
}

runLiveTest();