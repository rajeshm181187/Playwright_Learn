import test, { expect } from "@playwright/test";

let opp_id: any;
let ContentType = 'application/json'
let accessToken: any
let baseUrl: any
test.describe.serial('running serial test for opportunity', async () => {
    test.beforeAll(`TO generate token for salesforce`, async ({ request }) => {
        const uri = "https://login.salesforce.com/services/oauth2/token"
        const clientId = "3MVG9GCMQoQ6rpzQPM.T0bQIDhRnJ_3rk6GsZWxYkAlGC2k4.ZYg7Ml7vnfck9BuJcYJ5IsWmRK_d9p5b6QWW" //3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV"
        const clientSecret = "A822C7FD86F34426BF9984D218C8D5F65956DEA7D0F8511F1B1D99D42A400384" //"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654"
        const username = "rajesh.m181187@gmail.com" //vidyar@testleaf.com"
        const password = "Rajesh@123" //Sales@123"
        const grantType = "password"
        const response = await request.post(`${uri}`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Connection": "keep-alive"
            },
            form: {
                "grant_type": grantType,
                "client_id": clientId,
                "client_secret": clientSecret,
                "username": username,
                "password": password
            }
        })
        const res = await response.json();
        accessToken = res.access_token;
        baseUrl = res.instance_url;
        console.log(`The generated access token -  ${accessToken}`)
        console.log(`The generated instance Url -  ${baseUrl}`)
    })

    test('learn Api automation, create opportunity', async ({ request }) => {

        const response = await request.post(`${baseUrl}/services/data/v58.0/sobjects/Opportunity`,
            {
                headers: {
                    "Authorization": "Bearer " + accessToken,
                    "Content-Type": ContentType,
                },
                data: {
                    "Name": "Testpxz123",
                    "CloseDate": "2024-09-18",
                    "StageName": "Needs Analysis"
                }
            }
        )
        const responseData = await response.json()
        console.log(responseData);
        opp_id = responseData.id
        console.log("opp id from the response is " + opp_id)
    })

    test('Try with get req', async ({ request }) => {

        const res = await request.get(`${baseUrl}/services/data/v58.0/sobjects/Opportunity/${opp_id}`, {
            headers: {
                "Content-Type": ContentType,
                "Authorization": "Bearer " + accessToken
            }

        }

        )

        const responseJson = await res.json()
        console.log(responseJson)
        expect(await responseJson.Name).toContain('Testpxz')
        expect(await responseJson.Name).toMatch(/^[a-zA-Z0-9]+$/)
        expect(await responseJson.Id).toMatch(/[A-Za-z0-9]+/)
        console.log(typeof (responseJson.Id))
        console.log(typeof (responseJson.HasOverdueTask))
    })

    test('delete the opp Id', async ({ request }) => {

        const res = await request.delete(`${baseUrl}/services/data/v58.0/sobjects/Opportunity/${opp_id}`, {
            headers: {
                "Content-Type": ContentType,
                "Authorization": "Bearer " + accessToken
            }

        }

        )

        console.log(res.status())
    })

})