var nodes = [{'id': '12', 'label': 'христианский', 'title': 'Этнопоэтика, 1476', 'value': '1', 'group': '0', 'shape': 'hexagon'},
{'id': '5', 'label': 'русский', 'title': 'Этнопоэтика, 3601', 'value': '1', 'group': '3', 'shape': 'hexagon'},
{'id': '545', 'label': 'миросозерцание', 'title': 'Философский и др. дискурсы, 60', 'value': '1', 'shape': 'triangle', 'font': {'strokeWidth': 10, 'strokeColor': '#ffffff'}},
{'id': '32', 'label': 'религиозный', 'title': 'Философский и др. дискурсы, 494', 'value': '1', 'group': '3', 'shape': 'triangle'},
{'id': '34', 'label': 'поэтика', 'title': 'Литературоведение, 642', 'value': '1', 'group': '3', 'shape': 'diamond'},
];
var edges = [{'from': '13', 'to': '32', 'title': '36', 'value': '36'},
{'from': '227', 'to': '32', 'title': '6', 'value': '6'},
{'from': '19', 'to': '5', 'title': '56', 'value': '56'},
{'from': '9', 'to': '32', 'title': '25', 'value': '25'},
{'from': '20', 'to': '32', 'title': '14', 'value': '14'},
{'from': '32', 'to': '24', 'title': '31', 'value': '31'},
{'from': '32', 'to': '228', 'title': '12', 'value': '12'},
{'from': '32', 'to': '55', 'title': '11', 'value': '11'},
{'from': '3', 'to': '12', 'title': '34', 'value': '34'},
{'from': '13', 'to': '12', 'title': '50', 'value': '50'},
{'from': '190', 'to': '12', 'title': '9', 'value': '9'},
{'from': '28', 'to': '12', 'title': '46', 'value': '46'},
{'from': '32', 'to': '38', 'title': '11', 'value': '11'},
{'from': '25', 'to': '5', 'title': '88', 'value': '88'},
{'from': '5', 'to': '15', 'title': '78', 'value': '78'},
{'from': '13', 'to': '34', 'title': '16', 'value': '16'},
{'from': '5', 'to': '42', 'title': '34', 'value': '34'},
{'from': '34', 'to': '7', 'title': '44', 'value': '44'},
{'from': '34', 'to': '104', 'title': '8', 'value': '8'},
{'from': '42', 'to': '12', 'title': '16', 'value': '16'},
{'from': '77', 'to': '12', 'title': '33', 'value': '33'},
{'from': '6', 'to': '32', 'title': '27', 'value': '27'},
{'from': '12', 'to': '141', 'title': '43', 'value': '43'},
{'from': '12', 'to': '80', 'title': '16', 'value': '16'},
{'from': '284', 'to': '12', 'title': '15', 'value': '15'},
{'from': '31', 'to': '12', 'title': '17', 'value': '17'},
{'from': '280', 'to': '12', 'title': '10', 'value': '10'},
{'from': '18', 'to': '12', 'title': '45', 'value': '45'},
{'from': '44', 'to': '12', 'title': '37', 'value': '37'},
{'from': '32', 'to': '31', 'title': '5', 'value': '5'},
{'from': '32', 'to': '306', 'title': '7', 'value': '7'},
{'from': '32', 'to': '77', 'title': '23', 'value': '23'},
{'from': '32', 'to': '14', 'title': '29', 'value': '29'},
{'from': '308', 'to': '32', 'title': '7', 'value': '7'},
{'from': '32', 'to': '51', 'title': '25', 'value': '25'},
{'from': '19', 'to': '32', 'title': '26', 'value': '26'},
{'from': '29', 'to': '32', 'title': '24', 'value': '24'},
{'from': '21', 'to': '12', 'title': '47', 'value': '47'},
{'from': '9', 'to': '12', 'title': '45', 'value': '45'},
{'from': '32', 'to': '26', 'title': '20', 'value': '20'},
{'from': '76', 'to': '32', 'title': '9', 'value': '9'},
{'from': '32', 'to': '273', 'title': '6', 'value': '6'},
{'from': '69', 'to': '32', 'title': '11', 'value': '11'},
{'from': '34', 'to': '78', 'title': '36', 'value': '36'},
{'from': '2', 'to': '5', 'title': '97', 'value': '97'},
{'from': '41', 'to': '5', 'title': '28', 'value': '28'},
{'from': '168', 'to': '5', 'title': '10', 'value': '10'},
{'from': '5', 'to': '89', 'title': '25', 'value': '25'},
{'from': '148', 'to': '5', 'title': '31', 'value': '31'},
{'from': '259', 'to': '5', 'title': '17', 'value': '17'},
{'from': '32', 'to': '5', 'title': '47', 'value': '47'},
{'from': '32', 'to': '148', 'title': '10', 'value': '10'},
{'from': '5', 'to': '7', 'title': '69', 'value': '69'},
{'from': '32', 'to': '89', 'title': '12', 'value': '12'},
{'from': '10', 'to': '5', 'title': '160', 'value': '160'},
{'from': '51', 'to': '12', 'title': '6', 'value': '6'},
{'from': '12', 'to': '89', 'title': '6', 'value': '6'},
{'from': '85', 'to': '12', 'title': '7', 'value': '7'},
{'from': '29', 'to': '12', 'title': '32', 'value': '32'},
{'from': '233', 'to': '12', 'title': '6', 'value': '6'},
{'from': '13', 'to': '5', 'title': '81', 'value': '81'},
{'from': '6', 'to': '5', 'title': '83', 'value': '83'},
{'from': '5', 'to': '14', 'title': '72', 'value': '72'},
{'from': '5', 'to': '77', 'title': '11', 'value': '11'},
{'from': '10', 'to': '32', 'title': '22', 'value': '22'},
{'from': '32', 'to': '78', 'title': '11', 'value': '11'},
{'from': '5', 'to': '78', 'title': '13', 'value': '13'},
{'from': '50', 'to': '12', 'title': '6', 'value': '6'},
{'from': '22', 'to': '12', 'title': '14', 'value': '14'},
{'from': '357', 'to': '12', 'title': '6', 'value': '6'},
{'from': '2', 'to': '12', 'title': '75', 'value': '75'},
{'from': '33', 'to': '32', 'title': '16', 'value': '16'},
{'from': '32', 'to': '180', 'title': '10', 'value': '10'},
{'from': '5', 'to': '36', 'title': '318', 'value': '318'},
{'from': '5', 'to': '53', 'title': '35', 'value': '35'},
{'from': '5', 'to': '4', 'title': '177', 'value': '177'},
{'from': '34', 'to': '19', 'title': '33', 'value': '33'},
{'from': '5', 'to': '26', 'title': '78', 'value': '78'},
{'from': '68', 'to': '5', 'title': '23', 'value': '23'},
{'from': '154', 'to': '5', 'title': '30', 'value': '30'},
{'from': '18', 'to': '32', 'title': '26', 'value': '26'},
{'from': '32', 'to': '21', 'title': '27', 'value': '27'},
{'from': '32', 'to': '91', 'title': '18', 'value': '18'},
{'from': '5', 'to': '91', 'title': '17', 'value': '17'},
{'from': '5', 'to': '180', 'title': '17', 'value': '17'},
{'from': '23', 'to': '5', 'title': '74', 'value': '74'},
{'from': '45', 'to': '5', 'title': '62', 'value': '62'},
{'from': '18', 'to': '5', 'title': '62', 'value': '62'},
{'from': '12', 'to': '55', 'title': '31', 'value': '31'},
{'from': '168', 'to': '12', 'title': '17', 'value': '17'},
{'from': '5', 'to': '24', 'title': '27', 'value': '27'},
{'from': '3', 'to': '5', 'title': '61', 'value': '61'},
{'from': '60', 'to': '32', 'title': '12', 'value': '12'},
{'from': '2', 'to': '32', 'title': '33', 'value': '33'},
{'from': '156', 'to': '32', 'title': '13', 'value': '13'},
{'from': '32', 'to': '53', 'title': '16', 'value': '16'},
{'from': '94', 'to': '5', 'title': '44', 'value': '44'},
{'from': '232', 'to': '32', 'title': '9', 'value': '9'},
{'from': '221', 'to': '12', 'title': '6', 'value': '6'},
{'from': '23', 'to': '32', 'title': '26', 'value': '26'},
{'from': '32', 'to': '35', 'title': '8', 'value': '8'},
{'from': '3', 'to': '32', 'title': '20', 'value': '20'},
{'from': '417', 'to': '32', 'title': '5', 'value': '5'},
{'from': '118', 'to': '5', 'title': '42', 'value': '42'},
{'from': '5', 'to': '17', 'title': '67', 'value': '67'},
{'from': '34', 'to': '24', 'title': '11', 'value': '11'},
{'from': '88', 'to': '5', 'title': '14', 'value': '14'},
{'from': '16', 'to': '5', 'title': '34', 'value': '34'},
{'from': '5', 'to': '80', 'title': '28', 'value': '28'},
{'from': '44', 'to': '34', 'title': '8', 'value': '8'},
{'from': '10', 'to': '34', 'title': '83', 'value': '83'},
{'from': '34', 'to': '53', 'title': '8', 'value': '8'},
{'from': '33', 'to': '5', 'title': '44', 'value': '44'},
{'from': '5', 'to': '393', 'title': '9', 'value': '9'},
{'from': '5', 'to': '5', 'title': '137', 'value': '137'},
{'from': '5', 'to': '174', 'title': '11', 'value': '11'},
{'from': '32', 'to': '30', 'title': '6', 'value': '6'},
{'from': '5', 'to': '435', 'title': '7', 'value': '7'},
{'from': '22', 'to': '5', 'title': '64', 'value': '64'},
{'from': '5', 'to': '438', 'title': '22', 'value': '22'},
{'from': '209', 'to': '5', 'title': '11', 'value': '11'},
{'from': '81', 'to': '5', 'title': '31', 'value': '31'},
{'from': '5', 'to': '145', 'title': '7', 'value': '7'},
{'from': '34', 'to': '97', 'title': '31', 'value': '31'},
{'from': '96', 'to': '34', 'title': '32', 'value': '32'},
{'from': '34', 'to': '98', 'title': '35', 'value': '35'},
{'from': '81', 'to': '34', 'title': '5', 'value': '5'},
{'from': '1', 'to': '5', 'title': '125', 'value': '125'},
{'from': '29', 'to': '34', 'title': '5', 'value': '5'},
{'from': '229', 'to': '5', 'title': '6', 'value': '6'},
{'from': '135', 'to': '34', 'title': '8', 'value': '8'},
{'from': '33', 'to': '34', 'title': '16', 'value': '16'},
{'from': '40', 'to': '34', 'title': '11', 'value': '11'},
{'from': '40', 'to': '5', 'title': '40', 'value': '40'},
{'from': '457', 'to': '5', 'title': '5', 'value': '5'},
{'from': '94', 'to': '32', 'title': '9', 'value': '9'},
{'from': '32', 'to': '167', 'title': '6', 'value': '6'},
{'from': '5', 'to': '167', 'title': '31', 'value': '31'},
{'from': '394', 'to': '5', 'title': '7', 'value': '7'},
{'from': '209', 'to': '32', 'title': '5', 'value': '5'},
{'from': '54', 'to': '12', 'title': '58', 'value': '58'},
{'from': '54', 'to': '5', 'title': '23', 'value': '23'},
{'from': '12', 'to': '11', 'title': '31', 'value': '31'},
{'from': '20', 'to': '12', 'title': '38', 'value': '38'},
{'from': '1', 'to': '12', 'title': '63', 'value': '63'},
{'from': '40', 'to': '32', 'title': '23', 'value': '23'},
{'from': '124', 'to': '12', 'title': '7', 'value': '7'},
{'from': '46', 'to': '12', 'title': '8', 'value': '8'},
{'from': '65', 'to': '12', 'title': '14', 'value': '14'},
{'from': '171', 'to': '5', 'title': '15', 'value': '15'},
{'from': '431', 'to': '5', 'title': '7', 'value': '7'},
{'from': '9', 'to': '5', 'title': '35', 'value': '35'},
{'from': '5', 'to': '21', 'title': '47', 'value': '47'},
{'from': '44', 'to': '5', 'title': '21', 'value': '21'},
{'from': '83', 'to': '5', 'title': '42', 'value': '42'},
{'from': '5', 'to': '127', 'title': '27', 'value': '27'},
{'from': '48', 'to': '5', 'title': '15', 'value': '15'},
{'from': '5', 'to': '38', 'title': '31', 'value': '31'},
{'from': '8', 'to': '5', 'title': '85', 'value': '85'},
{'from': '216', 'to': '5', 'title': '10', 'value': '10'},
{'from': '69', 'to': '34', 'title': '30', 'value': '30'},
{'from': '309', 'to': '5', 'title': '5', 'value': '5'},
{'from': '5', 'to': '67', 'title': '20', 'value': '20'},
{'from': '34', 'to': '1', 'title': '37', 'value': '37'},
{'from': '162', 'to': '34', 'title': '5', 'value': '5'},
{'from': '150', 'to': '34', 'title': '11', 'value': '11'},
{'from': '428', 'to': '34', 'title': '10', 'value': '10'},
{'from': '12', 'to': '180', 'title': '11', 'value': '11'},
{'from': '87', 'to': '12', 'title': '5', 'value': '5'},
{'from': '5', 'to': '30', 'title': '29', 'value': '29'},
{'from': '175', 'to': '5', 'title': '69', 'value': '69'},
{'from': '34', 'to': '161', 'title': '9', 'value': '9'},
{'from': '27', 'to': '12', 'title': '10', 'value': '10'},
{'from': '12', 'to': '128', 'title': '6', 'value': '6'},
{'from': '476', 'to': '12', 'title': '19', 'value': '19'},
{'from': '12', 'to': '14', 'title': '32', 'value': '32'},
{'from': '224', 'to': '5', 'title': '5', 'value': '5'},
{'from': '34', 'to': '14', 'title': '20', 'value': '20'},
{'from': '120', 'to': '34', 'title': '23', 'value': '23'},
{'from': '34', 'to': '125', 'title': '17', 'value': '17'},
{'from': '179', 'to': '5', 'title': '35', 'value': '35'},
{'from': '146', 'to': '5', 'title': '8', 'value': '8'},
{'from': '53', 'to': '12', 'title': '18', 'value': '18'},
{'from': '16', 'to': '34', 'title': '53', 'value': '53'},
{'from': '40', 'to': '12', 'title': '16', 'value': '16'},
{'from': '5', 'to': '158', 'title': '9', 'value': '9'},
{'from': '12', 'to': '36', 'title': '6', 'value': '6'},
{'from': '72', 'to': '5', 'title': '6', 'value': '6'},
{'from': '5', 'to': '496', 'title': '15', 'value': '15'},
{'from': '184', 'to': '5', 'title': '36', 'value': '36'},
{'from': '137', 'to': '12', 'title': '7', 'value': '7'},
{'from': '5', 'to': '510', 'title': '13', 'value': '13'},
{'from': '186', 'to': '5', 'title': '11', 'value': '11'},
{'from': '5', 'to': '183', 'title': '7', 'value': '7'},
{'from': '5', 'to': '182', 'title': '6', 'value': '6'},
{'from': '5', 'to': '181', 'title': '16', 'value': '16'},
{'from': '5', 'to': '130', 'title': '8', 'value': '8'},
{'from': '34', 'to': '130', 'title': '8', 'value': '8'},
{'from': '156', 'to': '5', 'title': '11', 'value': '11'},
{'from': '286', 'to': '5', 'title': '19', 'value': '19'},
{'from': '18', 'to': '34', 'title': '9', 'value': '9'},
{'from': '34', 'to': '17', 'title': '36', 'value': '36'},
{'from': '62', 'to': '5', 'title': '12', 'value': '12'},
{'from': '468', 'to': '5', 'title': '14', 'value': '14'},
{'from': '10', 'to': '12', 'title': '52', 'value': '52'},
{'from': '5', 'to': '85', 'title': '14', 'value': '14'},
{'from': '39', 'to': '5', 'title': '27', 'value': '27'},
{'from': '29', 'to': '5', 'title': '35', 'value': '35'},
{'from': '5', 'to': '70', 'title': '6', 'value': '6'},
{'from': '385', 'to': '5', 'title': '6', 'value': '6'},
{'from': '110', 'to': '12', 'title': '8', 'value': '8'},
{'from': '5', 'to': '49', 'title': '40', 'value': '40'},
{'from': '82', 'to': '5', 'title': '19', 'value': '19'},
{'from': '109', 'to': '12', 'title': '10', 'value': '10'},
{'from': '350', 'to': '12', 'title': '14', 'value': '14'},
{'from': '8', 'to': '32', 'title': '32', 'value': '32'},
{'from': '5', 'to': '116', 'title': '13', 'value': '13'},
{'from': '350', 'to': '5', 'title': '5', 'value': '5'},
{'from': '32', 'to': '11', 'title': '12', 'value': '12'},
{'from': '32', 'to': '32', 'title': '17', 'value': '17'},
{'from': '32', 'to': '12', 'title': '30', 'value': '30'},
{'from': '32', 'to': '80', 'title': '9', 'value': '9'},
{'from': '54', 'to': '32', 'title': '13', 'value': '13'},
{'from': '5', 'to': '11', 'title': '53', 'value': '53'},
{'from': '75', 'to': '5', 'title': '8', 'value': '8'},
{'from': '271', 'to': '12', 'title': '5', 'value': '5'},
{'from': '8', 'to': '12', 'title': '39', 'value': '39'},
{'from': '164', 'to': '5', 'title': '11', 'value': '11'},
{'from': '5', 'to': '12', 'title': '34', 'value': '34'},
{'from': '34', 'to': '5', 'title': '29', 'value': '29'},
{'from': '82', 'to': '32', 'title': '10', 'value': '10'},
{'from': '126', 'to': '5', 'title': '6', 'value': '6'},
{'from': '117', 'to': '12', 'title': '6', 'value': '6'},
{'from': '5', 'to': '61', 'title': '9', 'value': '9'},
{'from': '39', 'to': '32', 'title': '7', 'value': '7'},
{'from': '32', 'to': '4', 'title': '27', 'value': '27'},
{'from': '117', 'to': '5', 'title': '7', 'value': '7'},
{'from': '12', 'to': '35', 'title': '20', 'value': '20'},
{'from': '27', 'to': '5', 'title': '41', 'value': '41'},
{'from': '5', 'to': '119', 'title': '24', 'value': '24'},
{'from': '5', 'to': '225', 'title': '9', 'value': '9'},
{'from': '47', 'to': '5', 'title': '19', 'value': '19'},
{'from': '5', 'to': '228', 'title': '10', 'value': '10'},
{'from': '5', 'to': '104', 'title': '6', 'value': '6'},
{'from': '537', 'to': '12', 'title': '17', 'value': '17'},
{'from': '45', 'to': '12', 'title': '29', 'value': '29'},
{'from': '26', 'to': '12', 'title': '35', 'value': '35'},
{'from': '118', 'to': '12', 'title': '16', 'value': '16'},
{'from': '5', 'to': '187', 'title': '9', 'value': '9'},
{'from': '20', 'to': '5', 'title': '57', 'value': '57'},
{'from': '37', 'to': '5', 'title': '16', 'value': '16'},
{'from': '107', 'to': '5', 'title': '6', 'value': '6'},
{'from': '280', 'to': '5', 'title': '7', 'value': '7'},
{'from': '32', 'to': '15', 'title': '47', 'value': '47'},
{'from': '41', 'to': '32', 'title': '15', 'value': '15'},
{'from': '32', 'to': '1', 'title': '20', 'value': '20'},
{'from': '12', 'to': '49', 'title': '16', 'value': '16'},
{'from': '12', 'to': '116', 'title': '15', 'value': '15'},
{'from': '32', 'to': '17', 'title': '11', 'value': '11'},
{'from': '28', 'to': '34', 'title': '14', 'value': '14'},
{'from': '70', 'to': '12', 'title': '15', 'value': '15'},
{'from': '30', 'to': '12', 'title': '11', 'value': '11'},
{'from': '37', 'to': '12', 'title': '14', 'value': '14'},
{'from': '311', 'to': '5', 'title': '22', 'value': '22'},
{'from': '5', 'to': '218', 'title': '5', 'value': '5'},
{'from': '5', 'to': '444', 'title': '5', 'value': '5'},
{'from': '216', 'to': '34', 'title': '14', 'value': '14'},
{'from': '28', 'to': '5', 'title': '18', 'value': '18'},
{'from': '133', 'to': '12', 'title': '25', 'value': '25'},
{'from': '130', 'to': '12', 'title': '8', 'value': '8'},
{'from': '82', 'to': '12', 'title': '9', 'value': '9'},
{'from': '308', 'to': '12', 'title': '11', 'value': '11'},
{'from': '120', 'to': '12', 'title': '9', 'value': '9'},
{'from': '444', 'to': '12', 'title': '7', 'value': '7'},
{'from': '225', 'to': '12', 'title': '6', 'value': '6'},
{'from': '17', 'to': '12', 'title': '40', 'value': '40'},
{'from': '4', 'to': '12', 'title': '41', 'value': '41'},
{'from': '69', 'to': '12', 'title': '24', 'value': '24'},
{'from': '127', 'to': '12', 'title': '13', 'value': '13'},
{'from': '48', 'to': '34', 'title': '12', 'value': '12'},
{'from': '34', 'to': '127', 'title': '6', 'value': '6'},
{'from': '34', 'to': '15', 'title': '22', 'value': '22'},
{'from': '43', 'to': '12', 'title': '14', 'value': '14'},
{'from': '12', 'to': '12', 'title': '38', 'value': '38'},
{'from': '211', 'to': '12', 'title': '20', 'value': '20'},
{'from': '12', 'to': '134', 'title': '6', 'value': '6'},
{'from': '470', 'to': '12', 'title': '9', 'value': '9'},
{'from': '484', 'to': '12', 'title': '5', 'value': '5'},
{'from': '64', 'to': '12', 'title': '20', 'value': '20'},
{'from': '7', 'to': '12', 'title': '43', 'value': '43'},
{'from': '6', 'to': '34', 'title': '15', 'value': '15'},
{'from': '34', 'to': '38', 'title': '8', 'value': '8'},
{'from': '15', 'to': '12', 'title': '43', 'value': '43'},
{'from': '24', 'to': '12', 'title': '26', 'value': '26'},
{'from': '347', 'to': '12', 'title': '14', 'value': '14'},
{'from': '69', 'to': '5', 'title': '22', 'value': '22'},
{'from': '428', 'to': '5', 'title': '18', 'value': '18'},
{'from': '72', 'to': '12', 'title': '8', 'value': '8'},
{'from': '179', 'to': '12', 'title': '8', 'value': '8'},
{'from': '19', 'to': '12', 'title': '24', 'value': '24'},
{'from': '100', 'to': '34', 'title': '17', 'value': '17'},
{'from': '5', 'to': '353', 'title': '8', 'value': '8'},
{'from': '34', 'to': '36', 'title': '11', 'value': '11'},
{'from': '34', 'to': '102', 'title': '6', 'value': '6'},
{'from': '162', 'to': '5', 'title': '18', 'value': '18'},
{'from': '412', 'to': '12', 'title': '6', 'value': '6'},
{'from': '92', 'to': '12', 'title': '6', 'value': '6'},
{'from': '93', 'to': '12', 'title': '7', 'value': '7'},
{'from': '52', 'to': '12', 'title': '10', 'value': '10'},
{'from': '327', 'to': '32', 'title': '7', 'value': '7'},
{'from': '23', 'to': '12', 'title': '34', 'value': '34'},
{'from': '45', 'to': '32', 'title': '11', 'value': '11'},
{'from': '402', 'to': '12', 'title': '9', 'value': '9'},
{'from': '375', 'to': '5', 'title': '7', 'value': '7'},
{'from': '56', 'to': '5', 'title': '6', 'value': '6'},
{'from': '8', 'to': '34', 'title': '19', 'value': '19'},
{'from': '135', 'to': '5', 'title': '7', 'value': '7'},
{'from': '5', 'to': '176', 'title': '8', 'value': '8'},
{'from': '122', 'to': '5', 'title': '21', 'value': '21'},
{'from': '167', 'to': '12', 'title': '12', 'value': '12'},
{'from': '91', 'to': '12', 'title': '17', 'value': '17'},
{'from': '232', 'to': '5', 'title': '14', 'value': '14'},
{'from': '157', 'to': '5', 'title': '8', 'value': '8'},
{'from': '437', 'to': '5', 'title': '7', 'value': '7'},
{'from': '545', 'to': '12', 'title': '8', 'value': '8'},
{'from': '5', 'to': '576', 'title': '5', 'value': '5'},
{'from': '5', 'to': '460', 'title': '10', 'value': '10'},
{'from': '41', 'to': '12', 'title': '54', 'value': '54'},
{'from': '38', 'to': '12', 'title': '12', 'value': '12'},
{'from': '5', 'to': '125', 'title': '9', 'value': '9'},
{'from': '6', 'to': '12', 'title': '37', 'value': '37'},
{'from': '531', 'to': '5', 'title': '8', 'value': '8'},
{'from': '170', 'to': '32', 'title': '9', 'value': '9'},
{'from': '34', 'to': '88', 'title': '15', 'value': '15'},
{'from': '88', 'to': '12', 'title': '13', 'value': '13'},
{'from': '62', 'to': '12', 'title': '6', 'value': '6'},
{'from': '5', 'to': '141', 'title': '5', 'value': '5'},
{'from': '46', 'to': '32', 'title': '13', 'value': '13'},
{'from': '34', 'to': '83', 'title': '11', 'value': '11'},
{'from': '34', 'to': '34', 'title': '43', 'value': '43'},
{'from': '57', 'to': '12', 'title': '6', 'value': '6'},
{'from': '5', 'to': '293', 'title': '6', 'value': '6'},
{'from': '25', 'to': '12', 'title': '9', 'value': '9'},
{'from': '317', 'to': '12', 'title': '8', 'value': '8'},
{'from': '574', 'to': '5', 'title': '6', 'value': '6'},
{'from': '545', 'to': '34', 'title': '6', 'value': '6'},
{'from': '34', 'to': '32', 'title': '7', 'value': '7'},
{'from': '545', 'to': '32', 'title': '7', 'value': '7'},
{'from': '22', 'to': '34', 'title': '34', 'value': '34'},
{'from': '34', 'to': '4', 'title': '43', 'value': '43'},
{'from': '126', 'to': '32', 'title': '5', 'value': '5'},
{'from': '156', 'to': '12', 'title': '12', 'value': '12'},
{'from': '95', 'to': '5', 'title': '7', 'value': '7'},
{'from': '95', 'to': '34', 'title': '12', 'value': '12'},
{'from': '34', 'to': '148', 'title': '19', 'value': '19'},
{'from': '545', 'to': '5', 'title': '5', 'value': '5'},
{'from': '5', 'to': '555', 'title': '7', 'value': '7'},
{'from': '239', 'to': '5', 'title': '7', 'value': '7'},
{'from': '34', 'to': '239', 'title': '5', 'value': '5'},
{'from': '204', 'to': '5', 'title': '33', 'value': '33'},
{'from': '5', 'to': '501', 'title': '6', 'value': '6'},
{'from': '411', 'to': '5', 'title': '7', 'value': '7'},
{'from': '120', 'to': '5', 'title': '14', 'value': '14'},
{'from': '5', 'to': '55', 'title': '22', 'value': '22'},
{'from': '224', 'to': '34', 'title': '12', 'value': '12'},
{'from': '34', 'to': '27', 'title': '18', 'value': '18'},
{'from': '318', 'to': '34', 'title': '6', 'value': '6'},
{'from': '34', 'to': '211', 'title': '10', 'value': '10'},
{'from': '176', 'to': '12', 'title': '8', 'value': '8'},
{'from': '171', 'to': '12', 'title': '6', 'value': '6'},
{'from': '34', 'to': '21', 'title': '11', 'value': '11'},
{'from': '46', 'to': '5', 'title': '18', 'value': '18'},
{'from': '318', 'to': '5', 'title': '5', 'value': '5'},
{'from': '34', 'to': '326', 'title': '7', 'value': '7'},
{'from': '32', 'to': '510', 'title': '6', 'value': '6'},
{'from': '5', 'to': '51', 'title': '35', 'value': '35'},
{'from': '12', 'to': '59', 'title': '18', 'value': '18'},
{'from': '43', 'to': '5', 'title': '18', 'value': '18'},
{'from': '253', 'to': '12', 'title': '8', 'value': '8'},
{'from': '259', 'to': '12', 'title': '20', 'value': '20'},
{'from': '136', 'to': '5', 'title': '9', 'value': '9'},
{'from': '131', 'to': '5', 'title': '7', 'value': '7'},
{'from': '44', 'to': '32', 'title': '18', 'value': '18'},
{'from': '28', 'to': '32', 'title': '20', 'value': '20'},
{'from': '5', 'to': '564', 'title': '7', 'value': '7'},
{'from': '112', 'to': '5', 'title': '21', 'value': '21'},
{'from': '351', 'to': '5', 'title': '6', 'value': '6'},
{'from': '90', 'to': '12', 'title': '28', 'value': '28'},
{'from': '113', 'to': '32', 'title': '6', 'value': '6'},
{'from': '25', 'to': '32', 'title': '6', 'value': '6'},
{'from': '47', 'to': '12', 'title': '21', 'value': '21'},
{'from': '221', 'to': '5', 'title': '17', 'value': '17'},
{'from': '280', 'to': '32', 'title': '13', 'value': '13'},
{'from': '56', 'to': '32', 'title': '6', 'value': '6'},
{'from': '93', 'to': '5', 'title': '6', 'value': '6'},
{'from': '100', 'to': '32', 'title': '6', 'value': '6'},
{'from': '230', 'to': '32', 'title': '5', 'value': '5'},
{'from': '67', 'to': '12', 'title': '8', 'value': '8'},
{'from': '189', 'to': '12', 'title': '6', 'value': '6'},
{'from': '453', 'to': '12', 'title': '5', 'value': '5'},
{'from': '593', 'to': '12', 'title': '8', 'value': '8'},
{'from': '204', 'to': '12', 'title': '6', 'value': '6'},
{'from': '32', 'to': '259', 'title': '10', 'value': '10'},
{'from': '309', 'to': '12', 'title': '7', 'value': '7'},
{'from': '452', 'to': '5', 'title': '5', 'value': '5'},
{'from': '83', 'to': '12', 'title': '13', 'value': '13'},
{'from': '100', 'to': '5', 'title': '16', 'value': '16'},
{'from': '22', 'to': '32', 'title': '7', 'value': '7'},
{'from': '47', 'to': '32', 'title': '6', 'value': '6'},
{'from': '100', 'to': '12', 'title': '12', 'value': '12'},
{'from': '34', 'to': '50', 'title': '24', 'value': '24'},
{'from': '2', 'to': '34', 'title': '21', 'value': '21'},
{'from': '135', 'to': '12', 'title': '5', 'value': '5'},
{'from': '140', 'to': '12', 'title': '23', 'value': '23'},
{'from': '12', 'to': '99', 'title': '9', 'value': '9'},
{'from': '183', 'to': '12', 'title': '5', 'value': '5'},
{'from': '32', 'to': '501', 'title': '16', 'value': '16'},
{'from': '122', 'to': '12', 'title': '10', 'value': '10'},
{'from': '60', 'to': '12', 'title': '21', 'value': '21'},
{'from': '337', 'to': '5', 'title': '6', 'value': '6'},
{'from': '5', 'to': '50', 'title': '11', 'value': '11'},
{'from': '34', 'to': '89', 'title': '6', 'value': '6'},
{'from': '5', 'to': '74', 'title': '18', 'value': '18'},
{'from': '5', 'to': '194', 'title': '11', 'value': '11'},
{'from': '5', 'to': '35', 'title': '6', 'value': '6'},
{'from': '5', 'to': '66', 'title': '27', 'value': '27'},
{'from': '32', 'to': '74', 'title': '5', 'value': '5'},
{'from': '32', 'to': '49', 'title': '5', 'value': '5'},
{'from': '542', 'to': '5', 'title': '6', 'value': '6'},
{'from': '32', 'to': '116', 'title': '8', 'value': '8'},
{'from': '107', 'to': '12', 'title': '10', 'value': '10'},
{'from': '108', 'to': '12', 'title': '7', 'value': '7'},
{'from': '34', 'to': '347', 'title': '9', 'value': '9'},
{'from': '32', 'to': '218', 'title': '9', 'value': '9'},
{'from': '268', 'to': '32', 'title': '6', 'value': '6'},
{'from': '5', 'to': '31', 'title': '12', 'value': '12'},
{'from': '56', 'to': '12', 'title': '13', 'value': '13'},
{'from': '383', 'to': '12', 'title': '5', 'value': '5'},
{'from': '71', 'to': '12', 'title': '7', 'value': '7'},
{'from': '39', 'to': '12', 'title': '7', 'value': '7'},
{'from': '33', 'to': '12', 'title': '30', 'value': '30'},
{'from': '39', 'to': '34', 'title': '5', 'value': '5'},
{'from': '95', 'to': '32', 'title': '11', 'value': '11'},
{'from': '385', 'to': '34', 'title': '5', 'value': '5'},
{'from': '181', 'to': '12', 'title': '8', 'value': '8'},
{'from': '62', 'to': '34', 'title': '8', 'value': '8'},
{'from': '436', 'to': '12', 'title': '5', 'value': '5'},
{'from': '32', 'to': '7', 'title': '18', 'value': '18'},
{'from': '111', 'to': '5', 'title': '5', 'value': '5'},
{'from': '71', 'to': '5', 'title': '6', 'value': '6'},
{'from': '419', 'to': '12', 'title': '7', 'value': '7'},
{'from': '60', 'to': '34', 'title': '14', 'value': '14'},
{'from': '25', 'to': '34', 'title': '18', 'value': '18'},
{'from': '311', 'to': '12', 'title': '11', 'value': '11'},
{'from': '214', 'to': '5', 'title': '26', 'value': '26'},
{'from': '115', 'to': '5', 'title': '31', 'value': '31'},
{'from': '92', 'to': '5', 'title': '11', 'value': '11'},
{'from': '57', 'to': '5', 'title': '7', 'value': '7'},
{'from': '240', 'to': '5', 'title': '5', 'value': '5'},
{'from': '184', 'to': '12', 'title': '7', 'value': '7'},
{'from': '32', 'to': '227', 'title': '10', 'value': '10'},
{'from': '5', 'to': '63', 'title': '7', 'value': '7'},
{'from': '486', 'to': '5', 'title': '8', 'value': '8'},
{'from': '184', 'to': '34', 'title': '7', 'value': '7'},
{'from': '520', 'to': '34', 'title': '5', 'value': '5'},
{'from': '173', 'to': '34', 'title': '7', 'value': '7'},
{'from': '34', 'to': '306', 'title': '6', 'value': '6'},
{'from': '60', 'to': '5', 'title': '21', 'value': '21'},
{'from': '5', 'to': '90', 'title': '12', 'value': '12'},
{'from': '133', 'to': '5', 'title': '6', 'value': '6'},
{'from': '34', 'to': '26', 'title': '22', 'value': '22'},
{'from': '34', 'to': '225', 'title': '6', 'value': '6'},
{'from': '216', 'to': '12', 'title': '8', 'value': '8'},
{'from': '214', 'to': '12', 'title': '14', 'value': '14'},
{'from': '12', 'to': '227', 'title': '7', 'value': '7'},
{'from': '57', 'to': '32', 'title': '6', 'value': '6'},
{'from': '34', 'to': '70', 'title': '8', 'value': '8'},
{'from': '380', 'to': '12', 'title': '5', 'value': '5'},
{'from': '110', 'to': '5', 'title': '10', 'value': '10'},
{'from': '5', 'to': '227', 'title': '6', 'value': '6'},
{'from': '64', 'to': '34', 'title': '11', 'value': '11'},
{'from': '193', 'to': '12', 'title': '5', 'value': '5'},
{'from': '179', 'to': '32', 'title': '10', 'value': '10'},
{'from': '250', 'to': '12', 'title': '6', 'value': '6'},
{'from': '64', 'to': '5', 'title': '13', 'value': '13'},
{'from': '34', 'to': '30', 'title': '15', 'value': '15'},
{'from': '5', 'to': '484', 'title': '7', 'value': '7'},
{'from': '192', 'to': '12', 'title': '7', 'value': '7'},
{'from': '5', 'to': '331', 'title': '6', 'value': '6'},
{'from': '452', 'to': '12', 'title': '8', 'value': '8'},
{'from': '244', 'to': '12', 'title': '15', 'value': '15'},
{'from': '175', 'to': '12', 'title': '5', 'value': '5'},
{'from': '160', 'to': '12', 'title': '7', 'value': '7'},
{'from': '20', 'to': '34', 'title': '5', 'value': '5'},
{'from': '177', 'to': '12', 'title': '6', 'value': '6'},
{'from': '82', 'to': '34', 'title': '20', 'value': '20'},
{'from': '156', 'to': '34', 'title': '6', 'value': '6'},
{'from': '34', 'to': '45', 'title': '8', 'value': '8'},
{'from': '139', 'to': '12', 'title': '40', 'value': '40'},
{'from': '162', 'to': '12', 'title': '8', 'value': '8'},
{'from': '9', 'to': '34', 'title': '9', 'value': '9'},
{'from': '5', 'to': '323', 'title': '6', 'value': '6'},
{'from': '34', 'to': '12', 'title': '9', 'value': '9'},
{'from': '608', 'to': '5', 'title': '6', 'value': '6'},
{'from': '307', 'to': '5', 'title': '7', 'value': '7'},
{'from': '406', 'to': '5', 'title': '5', 'value': '5'},
{'from': '593', 'to': '5', 'title': '7', 'value': '7'},
{'from': '79', 'to': '12', 'title': '5', 'value': '5'},
{'from': '76', 'to': '5', 'title': '8', 'value': '8'},
{'from': '244', 'to': '32', 'title': '6', 'value': '6'},
{'from': '133', 'to': '32', 'title': '7', 'value': '7'},
{'from': '248', 'to': '5', 'title': '10', 'value': '10'},
{'from': '65', 'to': '32', 'title': '6', 'value': '6'},
{'from': '32', 'to': '347', 'title': '6', 'value': '6'},
{'from': '5', 'to': '202', 'title': '5', 'value': '5'},
{'from': '420', 'to': '12', 'title': '5', 'value': '5'},
{'from': '510', 'to': '12', 'title': '9', 'value': '9'},
{'from': '12', 'to': '125', 'title': '9', 'value': '9'},
{'from': '58', 'to': '12', 'title': '6', 'value': '6'},
{'from': '34', 'to': '87', 'title': '5', 'value': '5'},
{'from': '34', 'to': '74', 'title': '9', 'value': '9'},
{'from': '194', 'to': '12', 'title': '5', 'value': '5'},
{'from': '34', 'to': '202', 'title': '5', 'value': '5'},
{'from': '12', 'to': '63', 'title': '6', 'value': '6'},
{'from': '228', 'to': '12', 'title': '7', 'value': '7'},
{'from': '34', 'to': '80', 'title': '7', 'value': '7'},
{'from': '177', 'to': '5', 'title': '9', 'value': '9'},
{'from': '336', 'to': '12', 'title': '8', 'value': '8'},
{'from': '34', 'to': '91', 'title': '7', 'value': '7'},
{'from': '306', 'to': '5', 'title': '11', 'value': '11'},
{'from': '5', 'to': '137', 'title': '5', 'value': '5'},
{'from': '228', 'to': '12', 'title': '6', 'value': '6'},
{'from': '5', 'to': '197', 'title': '9', 'value': '9'},
{'from': '32', 'to': '461', 'title': '5', 'value': '5'},
{'from': '34', 'to': '119', 'title': '10', 'value': '10'},
{'from': '34', 'to': '165', 'title': '5', 'value': '5'},
{'from': '34', 'to': '59', 'title': '12', 'value': '12'},
{'from': '34', 'to': '353', 'title': '11', 'value': '11'},
{'from': '5', 'to': '98', 'title': '5', 'value': '5'},
{'from': '155', 'to': '12', 'title': '5', 'value': '5'},
{'from': '239', 'to': '12', 'title': '5', 'value': '5'},
{'from': '326', 'to': '12', 'title': '5', 'value': '5'},
{'from': '3', 'to': '34', 'title': '10', 'value': '10'},
{'from': '34', 'to': '411', 'title': '5', 'value': '5'},
{'from': '79', 'to': '34', 'title': '5', 'value': '5'},
{'from': '251', 'to': '12', 'title': '5', 'value': '5'},
{'from': '16', 'to': '12', 'title': '10', 'value': '10'},
{'from': '248', 'to': '12', 'title': '17', 'value': '17'},
{'from': '5', 'to': '436', 'title': '5', 'value': '5'},
{'from': '34', 'to': '526', 'title': '9', 'value': '9'},
{'from': '94', 'to': '34', 'title': '7', 'value': '7'},
{'from': '34', 'to': '438', 'title': '16', 'value': '16'},
{'from': '5', 'to': '210', 'title': '10', 'value': '10'},
{'from': '205', 'to': '12', 'title': '5', 'value': '5'},
{'from': '65', 'to': '34', 'title': '7', 'value': '7'},
{'from': '244', 'to': '34', 'title': '6', 'value': '6'},
{'from': '566', 'to': '34', 'title': '5', 'value': '5'},
{'from': '574', 'to': '12', 'title': '6', 'value': '6'},
{'from': '426', 'to': '5', 'title': '6', 'value': '6'},
{'from': '170', 'to': '5', 'title': '8', 'value': '8'},
{'from': '118', 'to': '32', 'title': '11', 'value': '11'},
{'from': '540', 'to': '12', 'title': '7', 'value': '7'},
{'from': '540', 'to': '5', 'title': '8', 'value': '8'},
{'from': '95', 'to': '12', 'title': '9', 'value': '9'},
{'from': '154', 'to': '12', 'title': '5', 'value': '5'},
{'from': '193', 'to': '34', 'title': '5', 'value': '5'},
{'from': '579', 'to': '5', 'title': '9', 'value': '9'},
{'from': '5', 'to': '354', 'title': '5', 'value': '5'},
{'from': '232', 'to': '34', 'title': '6', 'value': '6'},
{'from': '304', 'to': '5', 'title': '5', 'value': '5'},
{'from': '34', 'to': '177', 'title': '8', 'value': '8'},
{'from': '322', 'to': '32', 'title': '7', 'value': '7'},
{'from': '5', 'to': '114', 'title': '8', 'value': '8'},
{'from': '5', 'to': '376', 'title': '5', 'value': '5'},
{'from': '238', 'to': '12', 'title': '6', 'value': '6'},
{'from': '65', 'to': '5', 'title': '16', 'value': '16'},
{'from': '12', 'to': '555', 'title': '5', 'value': '5'},
{'from': '5', 'to': '191', 'title': '8', 'value': '8'},
{'from': '5', 'to': '140', 'title': '8', 'value': '8'},
{'from': '581', 'to': '5', 'title': '5', 'value': '5'},
{'from': '32', 'to': '36', 'title': '6', 'value': '6'},
{'from': '94', 'to': '12', 'title': '8', 'value': '8'},
{'from': '192', 'to': '32', 'title': '9', 'value': '9'},
{'from': '34', 'to': '90', 'title': '8', 'value': '8'},
{'from': '88', 'to': '32', 'title': '10', 'value': '10'},
{'from': '144', 'to': '12', 'title': '9', 'value': '9'},
{'from': '541', 'to': '5', 'title': '5', 'value': '5'},
{'from': '34', 'to': '99', 'title': '7', 'value': '7'},
{'from': '491', 'to': '5', 'title': '5', 'value': '5'},
{'from': '595', 'to': '5', 'title': '5', 'value': '5'},
{'from': '431', 'to': '12', 'title': '7', 'value': '7'},
{'from': '463', 'to': '12', 'title': '5', 'value': '5'},
{'from': '16', 'to': '32', 'title': '5', 'value': '5'},
{'from': '200', 'to': '12', 'title': '5', 'value': '5'},
{'from': '502', 'to': '5', 'title': '5', 'value': '5'},
];
