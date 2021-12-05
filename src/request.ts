export const sendCheckUserInputRequest = async (suiteId: string, payload: string) => {
    const response = await fetch(`https://functions.yandexcloud.net/d4epbngd07lga786meqe?suiteId=${suiteId}`, {
        body: payload,
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        }
    });
    return await response.json();
}