from posixpath import basename
from time import sleep
from selenium import webdriver
from ahk import AHK
from openpyxl import Workbook
from openpyxl import load_workbook
import glob
import re
import codecs

def download_fflogs_report(fileName):
    ahk.run_script("Send,^s")
    ahk.run_script("WinWaitActive, Save As,,2")
    ahk.run_script("WinActivate, Save As")
    ahk.run_script(f"SendInput, C:\\Users\\AbsoluteCrow\\Documents\\Programming\\Python\\dsr_logs\\reports\\{fileName}.html")
    sleep(2)
    ahk.run_script("SendInput, {Enter}")

def open_fflogs_report(URL):
    driver.get(f"{URL}#boss=1065&difficulty=100&wipes=1&type=deaths")

# Set Selenium Variables
ahk = AHK()
driver = webdriver.Firefox(executable_path='C:/Users/AbsoluteCrow/Documents/Programming/Python/dsr_logs/geckodriver.exe')

# Obtain current existing reports
current_reports = []
for file in glob.glob("C:\\Users\\AbsoluteCrow\\Documents\\Programming\\Python\\dsr_logs\\reports\\*.html"):
    baseName = re.search(r"reports\\(.+)\.html", file).group(1)
    current_reports.append(baseName)

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

# Download reports that do not exist
for i in range(2,sheet.max_row):
    current_location = f"{COL_LOGS}{i}"

    if (sheet[current_location].value is not None):
        code = re.search(r"reports\/(.+)\/", sheet[current_location].value).group(1)
        if (code not in current_reports):
            open_fflogs_report(sheet[current_location].value)
            sleep(4)
            download_fflogs_report(code)
            sleep(4)

# Parse the HTML to obtain Dates, Wipes and Deaths
for file in glob.glob("C:\\Users\\AbsoluteCrow\\Documents\\Programming\\Python\\dsr_logs\\reports\\*.html"):
    htmlString = codecs.open(file, "r", encoding='UTF-8').read()
    baseName = re.search(r"reports\\(.+)\.html", file).group(1)
    date = re.search(r'id="report-start-date">(.+)<\/span>', htmlString).group(1)
    wipes = re.search(r'class="wipe"> Wipes \((.+)\)<\/span><\/div>', htmlString).group(1)

    try:
        deaths_jamie = re.search(r'Jamie Rosefall\s*<\/a>\s*<\/td><td class="main-table-number sorting_1" style="width:30px">(\d+)', htmlString).group(1)
    except:
        deaths_jamie = 0
    try:
        deaths_cesyanis = re.search(r'Cesyanis Corvus\s*<\/a>\s*<\/td><td class="main-table-number sorting_1" style="width:30px">(\d+)', htmlString).group(1)
    except:
        deaths_cesyanis = 0
    try:
        deaths_fayth = re.search(r'Fayth Delarosa\s*<\/a>\s*<\/td><td class="main-table-number sorting_1" style="width:30px">(\d+)', htmlString).group(1)
    except:
        deaths_fayth = 0
    try:
        deaths_evlesk = re.search(r'Evlesk Soimer\s*<\/a>\s*<\/td><td class="main-table-number sorting_1" style="width:30px">(\d+)', htmlString).group(1)
    except:
        deaths_evlesk = 0
    try:
        deaths_kaede = re.search(r'Kaede Yasashi\s*<\/a>\s*<\/td><td class="main-table-number sorting_1" style="width:30px">(\d+)', htmlString).group(1)
    except:
        deaths_kaede = 0
    try:
        deaths_mithril = re.search(r'Mithril Dieties\s*<\/a>\s*<\/td><td class="main-table-number sorting_1" style="width:30px">(\d+)', htmlString).group(1)
    except:
        deaths_mithril = 0
    try:
        deaths_feresia = re.search(r'Feresia Peith\s*<\/a>\s*<\/td><td class="main-table-number sorting_1" style="width:30px">(\d+)', htmlString).group(1)
    except:
        deaths_feresia = 0
    try:
        deaths_ralf = re.search(r'Reinhardt\s*<\/a>\s*<\/td><td class="main-table-number sorting_1" style="width:30px">(\d+)', htmlString).group(1)
    except:
        deaths_ralf = 0
    
    for i in range(2,sheet.max_row):
        if (sheet[f"{COL_LOGS}{i}"].value is not None):
            if (baseName in sheet[f"{COL_LOGS}{i}"].value):
                sheet[f"{COL_DATE}{i}"] = date
                sheet[f"{COL_WIPES}{i}"] = int(wipes)
                sheet[f"{COL_CES}{i}"] = int(deaths_cesyanis)
                sheet[f"{COL_JAMIE}{i}"] = int(deaths_jamie)
                sheet[f"{COL_FAYTH}{i}"] = int(deaths_fayth)
                sheet[f"{COL_EVE}{i}"] = int(deaths_evlesk)
                sheet[f"{COL_KAEDE}{i}"] = int(deaths_kaede)
                sheet[f"{COL_MITHRIL}{i}"] = int(deaths_mithril)
                sheet[f"{COL_FERESIA}{i}"] = int(deaths_feresia)
                sheet[f"{COL_RALF}{i}"] = int(deaths_ralf)

workbook.save(logs_excel)