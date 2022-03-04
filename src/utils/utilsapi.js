import request from 'axios';

class UtilsApi {
    static loadNotionContent = (pageId) => {

        const apiPromise = request({
            method: "GET",
            url: `https://notion-api.splitbee.io/v1/page/${pageId}`,
        });

        return apiPromise;
    }
}

export default UtilsApi;