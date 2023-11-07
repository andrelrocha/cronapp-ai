package blockly;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

/**
 * Classe que representa ...
 * 
 * @author Andre Lucio Rocha Wanderley
 * @version 1.0
 * @since 2023-11-07
 *
 */
 
public class OpenAiService {

	/**
	 * Construtor
	 **/
	public OpenAiService (RestTemplate restTemplate){
		this.restTemplate = restTemplate;
	}
	private final RestTemplate restTemplate;

	private final String apiKey = "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";
    private final String modelId = "davinci-002";
    private final String url =  "https://api.openai.com/v1/completions";

	public String openAIServiceCall(String userInput) {

        var headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + apiKey);
        System.out.println(headers);

        var requestBody = "{\"model\": \"" + modelId +
                "\", \"messages\": [{\"role\": \"user\", \"content\": \"" +
                userInput + "\"}]}";

        var request = new HttpEntity<>(requestBody, headers);

        var response = restTemplate.postForObject(url, request, String.class);

        return response;

    }

}
