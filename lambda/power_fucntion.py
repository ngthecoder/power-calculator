import json
import math

def lambda_handler(event, context):
    mathResult = math.pow(int(event['base']), int(event['exponent']))
    
    return {
        'statusCode': 200,
        'body': json.dumps('Your result is ' + str(mathResult))
    }