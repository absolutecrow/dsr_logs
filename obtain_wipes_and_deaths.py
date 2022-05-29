import requests
import json
import re
from openpyxl import Workbook
from openpyxl import load_workbook
from datetime import datetime
import tzlocal

def obtain_access_token():
    url = "https://www.fflogs.com/oauth/token"

    payload={'grant_type': 'client_credentials'}
    file = open("C:\\Users\\AbsoluteCrow\\Documents\\Programming\\Python\\fflogs_keys.json")
    fflogs_keys = json.load(file)

    headers = {
    'Authorization': f"{fflogs_keys['Auth_Basic']}"
    }

    response = requests.request("POST", url, headers=headers, data=payload).json()
    return response['access_token']

def query_fflogs(graphql_query):
    url = "https://www.fflogs.com/api/v2/client"

    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }

    data = {"query": graphql_query}
    json_data = json.dumps(data)

    response = requests.request("POST", url, headers=headers, data=json_data).json()
    return response

def search_through_deaths_for_name(deaths, name):
    death_counter = 0
    for death in deaths['data']['reportData']['report']['table']['data']['entries']:
        if (death['name'] == name):
            death_counter += 1
    return death_counter

# Set Excel Sheet Variables
logs_excel = 'P:/My Drive/DSR - Logs.xlsx'
workbook = load_workbook(logs_excel)
sheet = workbook.worksheets[0]
COL_LOGS = 'B'
COL_DATE = 'C'
COL_WIPES = 'A'
COL_CES = 'F'
COL_JAMIE = 'G'
COL_FAYTH = 'H'
COL_EVE = 'I'
COL_KAEDE = 'J'
COL_MITHRIL = 'K'
COL_FERESIA = 'L'
COL_RALF = 'M'

access_token = obtain_access_token()

# Query API for the Codes Listed
for i in range(2,sheet.max_row):
    current_location = f"{COL_LOGS}{i}"

    if (sheet[current_location].value is not None):

        # Iterate through the excel sheet url to obtain the URL of reach report.
        code = re.search(r"reports\/(.+)\/", sheet[current_location].value).group(1)
        graphql_query = f"""
        {{
            reportData{{
                report(code: "{code}"){{
                    startTime
                    fights(encounterID: 1065){{
                        id
                        endTime
                    }}
                }}
            }}
        }}
        """
        print(f"Processing {code}")

        try:
            fights = query_fflogs(graphql_query) # Query against the FF Logs api to obtain the fights in the URL
        except:
            fights = query_fflogs(graphql_query)

        # Extract and Store the date in the Excel Sheet column C
        local_timezone = tzlocal.get_localzone()
        unix_timestamp = float(fights['data']['reportData']['report']['startTime'])/1000
        local_time = datetime.fromtimestamp(unix_timestamp, local_timezone)
        sheet[f"{COL_DATE}{i}"] = local_time.strftime(r"%m/%d/%Y")

        # Preparing the Excel before processing fights.
        sheet[f"{COL_CES}{i}"] = int(0)
        sheet[f"{COL_JAMIE}{i}"] = int(0)
        sheet[f"{COL_FAYTH}{i}"] = int(0)
        sheet[f"{COL_EVE}{i}"] = int(0)
        sheet[f"{COL_KAEDE}{i}"] = int(0)
        sheet[f"{COL_MITHRIL}{i}"] = int(0)
        sheet[f"{COL_FERESIA}{i}"] = int(0)
        sheet[f"{COL_RALF}{i}"] = int(0)

        # Iterate through each fight in the report and add up the deaths.
        fight_counter = 0
        for fight in fights['data']['reportData']['report']['fights']:
            fight_counter += 1
            graphql_query = f"""
            {{
                reportData{{
                    report(code: "{code}"){{
                        table(fightIDs:{fight['id']}, endTime:{fight['endTime']}, dataType:Deaths)
                    }}
                }}
            }}
            """
            try:
                deaths = query_fflogs(graphql_query)
            except:
                deaths = query_fflogs(graphql_query)
            
            death_counter = search_through_deaths_for_name(deaths, sheet[COL_CES][0].value)
            sheet[f"{COL_CES}{i}"] = int(death_counter) + int(sheet[f"{COL_CES}{i}"].value)

            death_counter = search_through_deaths_for_name(deaths, sheet[COL_JAMIE][0].value)
            sheet[f"{COL_JAMIE}{i}"] = int(death_counter) + int(sheet[f"{COL_JAMIE}{i}"].value)

            death_counter = search_through_deaths_for_name(deaths, sheet[COL_FAYTH][0].value)
            sheet[f"{COL_FAYTH}{i}"] = int(death_counter) + int(sheet[f"{COL_FAYTH}{i}"].value)

            death_counter = search_through_deaths_for_name(deaths, sheet[COL_EVE][0].value)
            sheet[f"{COL_EVE}{i}"] = int(death_counter) + int(sheet[f"{COL_EVE}{i}"].value)

            death_counter = search_through_deaths_for_name(deaths, sheet[COL_KAEDE][0].value)
            sheet[f"{COL_KAEDE}{i}"] = int(death_counter) + int(sheet[f"{COL_KAEDE}{i}"].value)

            death_counter = search_through_deaths_for_name(deaths, sheet[COL_MITHRIL][0].value)
            sheet[f"{COL_MITHRIL}{i}"] = int(death_counter) + int(sheet[f"{COL_MITHRIL}{i}"].value)

            death_counter = search_through_deaths_for_name(deaths, sheet[COL_FERESIA][0].value)
            sheet[f"{COL_FERESIA}{i}"] = int(death_counter) + int(sheet[f"{COL_FERESIA}{i}"].value)

            death_counter = search_through_deaths_for_name(deaths, sheet[COL_RALF][0].value)
            sheet[f"{COL_RALF}{i}"] = int(death_counter) + int(sheet[f"{COL_RALF}{i}"].value)

        sheet[f"{COL_WIPES}{i}"] = int(fight_counter)

workbook.save(logs_excel)