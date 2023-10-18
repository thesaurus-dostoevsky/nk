var nodes = [{'id': '82', 'label': 'научный', 'title': 'Философский и др. дискурсы, 165', 'value': '4', 'group': '3', 'shape': 'triangle', 'font': {'strokeWidth': 10, 'strokeColor': '#ffffff'}},
{'id': '10', 'label': 'литература', 'title': 'Литературоведение, 2038', 'value': '38', 'group': '3', 'shape': 'diamond'},
{'id': '74', 'label': 'фантастика', 'title': 'Литературоведение, 214', 'value': '5', 'group': '3', 'shape': 'diamond'},
{'id': '26', 'label': 'традиция', 'title': 'Историческая поэтика, 769', 'value': '20', 'group': '0', 'shape': 'dot'},
{'id': '17', 'label': 'русский литература', 'title': 'Литературоведение, 1592', 'value': '28', 'group': '9', 'shape': 'diamond'},
];
var edges = [{'from': '19', 'to': '17', 'title': '166', 'value': '166'},
{'from': '142', 'to': '26', 'title': '28', 'value': '28'},
{'from': '18', 'to': '26', 'title': '48', 'value': '48'},
{'from': '47', 'to': '26', 'title': '39', 'value': '39'},
{'from': '26', 'to': '14', 'title': '32', 'value': '32'},
{'from': '10', 'to': '5', 'title': '160', 'value': '160'},
{'from': '10', 'to': '4', 'title': '68', 'value': '68'},
{'from': '10', 'to': '14', 'title': '119', 'value': '119'},
{'from': '13', 'to': '10', 'title': '31', 'value': '31'},
{'from': '10', 'to': '77', 'title': '28', 'value': '28'},
{'from': '10', 'to': '28', 'title': '39', 'value': '39'},
{'from': '4', 'to': '26', 'title': '42', 'value': '42'},
{'from': '5', 'to': '26', 'title': '78', 'value': '78'},
{'from': '10', 'to': '2', 'title': '51', 'value': '51'},
{'from': '45', 'to': '26', 'title': '35', 'value': '35'},
{'from': '17', 'to': '26', 'title': '32', 'value': '32'},
{'from': '2', 'to': '26', 'title': '52', 'value': '52'},
{'from': '94', 'to': '26', 'title': '38', 'value': '38'},
{'from': '8', 'to': '10', 'title': '32', 'value': '32'},
{'from': '8', 'to': '26', 'title': '32', 'value': '32'},
{'from': '10', 'to': '26', 'title': '43', 'value': '43'},
{'from': '6', 'to': '26', 'title': '31', 'value': '31'},
{'from': '3', 'to': '10', 'title': '37', 'value': '37'},
{'from': '17', 'to': '7', 'title': '38', 'value': '38'},
{'from': '10', 'to': '24', 'title': '32', 'value': '32'},
{'from': '10', 'to': '15', 'title': '58', 'value': '58'},
{'from': '1', 'to': '26', 'title': '45', 'value': '45'},
{'from': '1', 'to': '17', 'title': '39', 'value': '39'},
{'from': '5', 'to': '17', 'title': '67', 'value': '67'},
{'from': '17', 'to': '80', 'title': '73', 'value': '73'},
{'from': '10', 'to': '34', 'title': '83', 'value': '83'},
{'from': '6', 'to': '17', 'title': '44', 'value': '44'},
{'from': '10', 'to': '94', 'title': '40', 'value': '40'},
{'from': '22', 'to': '17', 'title': '30', 'value': '30'},
{'from': '40', 'to': '10', 'title': '63', 'value': '63'},
{'from': '10', 'to': '36', 'title': '80', 'value': '80'},
{'from': '16', 'to': '17', 'title': '68', 'value': '68'},
{'from': '17', 'to': '4', 'title': '54', 'value': '54'},
{'from': '10', 'to': '82', 'title': '42', 'value': '42'},
{'from': '16', 'to': '10', 'title': '100', 'value': '100'},
{'from': '10', 'to': '7', 'title': '64', 'value': '64'},
{'from': '10', 'to': '25', 'title': '63', 'value': '63'},
{'from': '10', 'to': '19', 'title': '47', 'value': '47'},
{'from': '10', 'to': '17', 'title': '68', 'value': '68'},
{'from': '25', 'to': '17', 'title': '25', 'value': '25'},
{'from': '10', 'to': '45', 'title': '33', 'value': '33'},
{'from': '17', 'to': '15', 'title': '46', 'value': '46'},
{'from': '171', 'to': '10', 'title': '36', 'value': '36'},
{'from': '33', 'to': '10', 'title': '31', 'value': '31'},
{'from': '10', 'to': '10', 'title': '73', 'value': '73'},
{'from': '6', 'to': '10', 'title': '73', 'value': '73'},
{'from': '10', 'to': '127', 'title': '28', 'value': '28'},
{'from': '8', 'to': '17', 'title': '34', 'value': '34'},
{'from': '10', 'to': '1', 'title': '59', 'value': '59'},
{'from': '178', 'to': '17', 'title': '62', 'value': '62'},
{'from': '48', 'to': '17', 'title': '99', 'value': '99'},
{'from': '72', 'to': '17', 'title': '142', 'value': '142'},
{'from': '17', 'to': '73', 'title': '92', 'value': '92'},
{'from': '84', 'to': '17', 'title': '83', 'value': '83'},
{'from': '15', 'to': '26', 'title': '45', 'value': '45'},
{'from': '34', 'to': '17', 'title': '36', 'value': '36'},
{'from': '10', 'to': '12', 'title': '52', 'value': '52'},
{'from': '17', 'to': '14', 'title': '30', 'value': '30'},
{'from': '10', 'to': '30', 'title': '35', 'value': '35'},
{'from': '17', 'to': '17', 'title': '38', 'value': '38'},
{'from': '45', 'to': '17', 'title': '49', 'value': '49'},
{'from': '82', 'to': '17', 'title': '31', 'value': '31'},
{'from': '26', 'to': '12', 'title': '35', 'value': '35'},
{'from': '10', 'to': '78', 'title': '38', 'value': '38'},
{'from': '17', 'to': '30', 'title': '41', 'value': '41'},
{'from': '26', 'to': '26', 'title': '25', 'value': '25'},
{'from': '7', 'to': '26', 'title': '38', 'value': '38'},
{'from': '17', 'to': '134', 'title': '27', 'value': '27'},
{'from': '17', 'to': '12', 'title': '40', 'value': '40'},
{'from': '10', 'to': '205', 'title': '30', 'value': '30'},
{'from': '82', 'to': '26', 'title': '26', 'value': '26'},
{'from': '10', 'to': '83', 'title': '29', 'value': '29'},
{'from': '10', 'to': '22', 'title': '25', 'value': '25'},
{'from': '10', 'to': '50', 'title': '29', 'value': '29'},
{'from': '66', 'to': '74', 'title': '25', 'value': '25'},
{'from': '82', 'to': '74', 'title': '66', 'value': '66'},
{'from': '18', 'to': '10', 'title': '46', 'value': '46'},
{'from': '74', 'to': '74', 'title': '34', 'value': '34'},
{'from': '74', 'to': '50', 'title': '55', 'value': '55'},
];
