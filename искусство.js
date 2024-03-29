var nodes = [{'id': '15', 'label': 'творчество', 'title': 'Литературоведение, 1497', 'value': '31', 'group': '3', 'shape': 'diamond'},
{'id': '78', 'label': 'эстетика', 'title': 'Философский и др. дискурсы, 143', 'value': '4', 'group': '3', 'shape': 'triangle'},
{'id': '14', 'label': 'художественный', 'title': 'Литературоведение, 1489', 'value': '32', 'group': '3', 'shape': 'diamond'},
{'id': '5', 'label': 'русский', 'title': 'Этнопоэтика, 3601', 'value': '60', 'group': '3', 'shape': 'hexagon'},
{'id': '2', 'label': 'образ', 'title': 'Литературоведение, 3695', 'value': '68', 'group': '0', 'shape': 'diamond'},
{'id': '6', 'label': 'время', 'title': 'Литературоведение, 2345', 'value': '47', 'group': '2', 'shape': 'diamond'},
{'id': '4', 'label': 'слово', 'title': 'Этнопоэтика, 3827', 'value': '61', 'group': '4', 'shape': 'hexagon'},
{'id': '38', 'label': 'форма', 'title': 'Литературоведение, 538', 'value': '14', 'group': '3', 'shape': 'diamond'},
{'id': '50', 'label': 'фантастический', 'title': 'Литературоведение, 336', 'value': '9', 'group': '3', 'shape': 'diamond'},
{'id': '10', 'label': 'литература', 'title': 'Литературоведение, 2038', 'value': '38', 'group': '3', 'shape': 'diamond'},
{'id': '40', 'label': 'искусство', 'title': 'Философский и др. дискурсы, 496', 'value': '13', 'group': '3', 'shape': 'triangle', 'font': {'strokeWidth': 10, 'strokeColor': '#ffffff'}},
{'id': '77', 'label': 'философия', 'title': 'Философский и др. дискурсы, 121', 'value': '4', 'group': '3', 'shape': 'triangle'},
];
var edges = [{'from': '15', 'to': '24', 'title': '51', 'value': '51'},
{'from': '104', 'to': '14', 'title': '28', 'value': '28'},
{'from': '2', 'to': '39', 'title': '45', 'value': '45'},
{'from': '9', 'to': '2', 'title': '81', 'value': '81'},
{'from': '39', 'to': '4', 'title': '27', 'value': '27'},
{'from': '28', 'to': '4', 'title': '29', 'value': '29'},
{'from': '19', 'to': '5', 'title': '56', 'value': '56'},
{'from': '8', 'to': '4', 'title': '87', 'value': '87'},
{'from': '3', 'to': '15', 'title': '38', 'value': '38'},
{'from': '3', 'to': '14', 'title': '36', 'value': '36'},
{'from': '15', 'to': '14', 'title': '141', 'value': '141'},
{'from': '8', 'to': '2', 'title': '88', 'value': '88'},
{'from': '28', 'to': '2', 'title': '83', 'value': '83'},
{'from': '19', 'to': '15', 'title': '100', 'value': '100'},
{'from': '20', 'to': '4', 'title': '66', 'value': '66'},
{'from': '3', 'to': '4', 'title': '150', 'value': '150'},
{'from': '3', 'to': '2', 'title': '144', 'value': '144'},
{'from': '2', 'to': '11', 'title': '74', 'value': '74'},
{'from': '6', 'to': '2', 'title': '56', 'value': '56'},
{'from': '56', 'to': '2', 'title': '26', 'value': '26'},
{'from': '9', 'to': '4', 'title': '171', 'value': '171'},
{'from': '88', 'to': '4', 'title': '35', 'value': '35'},
{'from': '33', 'to': '4', 'title': '142', 'value': '142'},
{'from': '25', 'to': '5', 'title': '88', 'value': '88'},
{'from': '47', 'to': '2', 'title': '37', 'value': '37'},
{'from': '28', 'to': '15', 'title': '47', 'value': '47'},
{'from': '2', 'to': '15', 'title': '48', 'value': '48'},
{'from': '13', 'to': '2', 'title': '111', 'value': '111'},
{'from': '2', 'to': '42', 'title': '49', 'value': '49'},
{'from': '5', 'to': '15', 'title': '78', 'value': '78'},
{'from': '2', 'to': '2', 'title': '151', 'value': '151'},
{'from': '43', 'to': '2', 'title': '33', 'value': '33'},
{'from': '2', 'to': '35', 'title': '51', 'value': '51'},
{'from': '13', 'to': '15', 'title': '52', 'value': '52'},
{'from': '5', 'to': '42', 'title': '34', 'value': '34'},
{'from': '2', 'to': '105', 'title': '25', 'value': '25'},
{'from': '23', 'to': '2', 'title': '52', 'value': '52'},
{'from': '6', 'to': '11', 'title': '50', 'value': '50'},
{'from': '77', 'to': '12', 'title': '33', 'value': '33'},
{'from': '6', 'to': '35', 'title': '45', 'value': '45'},
{'from': '29', 'to': '4', 'title': '70', 'value': '70'},
{'from': '19', 'to': '4', 'title': '28', 'value': '28'},
{'from': '6', 'to': '6', 'title': '113', 'value': '113'},
{'from': '6', 'to': '32', 'title': '27', 'value': '27'},
{'from': '13', 'to': '77', 'title': '35', 'value': '35'},
{'from': '2', 'to': '24', 'title': '61', 'value': '61'},
{'from': '20', 'to': '2', 'title': '61', 'value': '61'},
{'from': '2', 'to': '31', 'title': '46', 'value': '46'},
{'from': '4', 'to': '35', 'title': '33', 'value': '33'},
{'from': '4', 'to': '4', 'title': '229', 'value': '229'},
{'from': '2', 'to': '68', 'title': '29', 'value': '29'},
{'from': '88', 'to': '15', 'title': '26', 'value': '26'},
{'from': '51', 'to': '14', 'title': '36', 'value': '36'},
{'from': '32', 'to': '14', 'title': '29', 'value': '29'},
{'from': '144', 'to': '6', 'title': '38', 'value': '38'},
{'from': '2', 'to': '14', 'title': '56', 'value': '56'},
{'from': '18', 'to': '4', 'title': '40', 'value': '40'},
{'from': '44', 'to': '4', 'title': '27', 'value': '27'},
{'from': '40', 'to': '4', 'title': '28', 'value': '28'},
{'from': '40', 'to': '40', 'title': '54', 'value': '54'},
{'from': '40', 'to': '78', 'title': '33', 'value': '33'},
{'from': '40', 'to': '38', 'title': '27', 'value': '27'},
{'from': '6', 'to': '40', 'title': '31', 'value': '31'},
{'from': '2', 'to': '7', 'title': '80', 'value': '80'},
{'from': '76', 'to': '4', 'title': '51', 'value': '51'},
{'from': '109', 'to': '4', 'title': '26', 'value': '26'},
{'from': '4', 'to': '31', 'title': '37', 'value': '37'},
{'from': '4', 'to': '21', 'title': '71', 'value': '71'},
{'from': '15', 'to': '78', 'title': '36', 'value': '36'},
{'from': '58', 'to': '4', 'title': '29', 'value': '29'},
{'from': '4', 'to': '15', 'title': '67', 'value': '67'},
{'from': '8', 'to': '38', 'title': '26', 'value': '26'},
{'from': '18', 'to': '15', 'title': '29', 'value': '29'},
{'from': '2', 'to': '90', 'title': '70', 'value': '70'},
{'from': '4', 'to': '36', 'title': '114', 'value': '114'},
{'from': '57', 'to': '4', 'title': '26', 'value': '26'},
{'from': '23', 'to': '4', 'title': '61', 'value': '61'},
{'from': '43', 'to': '4', 'title': '78', 'value': '78'},
{'from': '34', 'to': '78', 'title': '36', 'value': '36'},
{'from': '2', 'to': '5', 'title': '97', 'value': '97'},
{'from': '41', 'to': '5', 'title': '28', 'value': '28'},
{'from': '41', 'to': '2', 'title': '36', 'value': '36'},
{'from': '21', 'to': '14', 'title': '41', 'value': '41'},
{'from': '4', 'to': '14', 'title': '53', 'value': '53'},
{'from': '5', 'to': '89', 'title': '25', 'value': '25'},
{'from': '148', 'to': '5', 'title': '31', 'value': '31'},
{'from': '32', 'to': '5', 'title': '47', 'value': '47'},
{'from': '5', 'to': '7', 'title': '69', 'value': '69'},
{'from': '21', 'to': '15', 'title': '42', 'value': '42'},
{'from': '149', 'to': '14', 'title': '26', 'value': '26'},
{'from': '23', 'to': '6', 'title': '28', 'value': '28'},
{'from': '150', 'to': '14', 'title': '27', 'value': '27'},
{'from': '26', 'to': '14', 'title': '32', 'value': '32'},
{'from': '10', 'to': '5', 'title': '160', 'value': '160'},
{'from': '10', 'to': '4', 'title': '68', 'value': '68'},
{'from': '40', 'to': '77', 'title': '25', 'value': '25'},
{'from': '91', 'to': '38', 'title': '42', 'value': '42'},
{'from': '6', 'to': '19', 'title': '39', 'value': '39'},
{'from': '38', 'to': '14', 'title': '32', 'value': '32'},
{'from': '40', 'to': '14', 'title': '27', 'value': '27'},
{'from': '19', 'to': '14', 'title': '53', 'value': '53'},
{'from': '40', 'to': '2', 'title': '33', 'value': '33'},
{'from': '6', 'to': '36', 'title': '29', 'value': '29'},
{'from': '10', 'to': '14', 'title': '119', 'value': '119'},
{'from': '13', 'to': '14', 'title': '41', 'value': '41'},
{'from': '13', 'to': '10', 'title': '31', 'value': '31'},
{'from': '6', 'to': '20', 'title': '35', 'value': '35'},
{'from': '8', 'to': '6', 'title': '64', 'value': '64'},
{'from': '13', 'to': '5', 'title': '81', 'value': '81'},
{'from': '6', 'to': '5', 'title': '83', 'value': '83'},
{'from': '6', 'to': '13', 'title': '68', 'value': '68'},
{'from': '14', 'to': '151', 'title': '26', 'value': '26'},
{'from': '5', 'to': '14', 'title': '72', 'value': '72'},
{'from': '10', 'to': '77', 'title': '28', 'value': '28'},
{'from': '25', 'to': '4', 'title': '41', 'value': '41'},
{'from': '2', 'to': '4', 'title': '105', 'value': '105'},
{'from': '2', 'to': '22', 'title': '54', 'value': '54'},
{'from': '15', 'to': '7', 'title': '30', 'value': '30'},
{'from': '2', 'to': '12', 'title': '75', 'value': '75'},
{'from': '2', 'to': '38', 'title': '42', 'value': '42'},
{'from': '2', 'to': '1', 'title': '187', 'value': '187'},
{'from': '10', 'to': '28', 'title': '39', 'value': '39'},
{'from': '6', 'to': '33', 'title': '25', 'value': '25'},
{'from': '5', 'to': '36', 'title': '318', 'value': '318'},
{'from': '5', 'to': '53', 'title': '35', 'value': '35'},
{'from': '5', 'to': '4', 'title': '177', 'value': '177'},
{'from': '2', 'to': '19', 'title': '28', 'value': '28'},
{'from': '4', 'to': '26', 'title': '42', 'value': '42'},
{'from': '5', 'to': '26', 'title': '78', 'value': '78'},
{'from': '16', 'to': '38', 'title': '40', 'value': '40'},
{'from': '154', 'to': '5', 'title': '30', 'value': '30'},
{'from': '2', 'to': '79', 'title': '27', 'value': '27'},
{'from': '2', 'to': '114', 'title': '25', 'value': '25'},
{'from': '2', 'to': '21', 'title': '68', 'value': '68'},
{'from': '10', 'to': '2', 'title': '51', 'value': '51'},
{'from': '2', 'to': '112', 'title': '29', 'value': '29'},
{'from': '115', 'to': '2', 'title': '32', 'value': '32'},
{'from': '23', 'to': '5', 'title': '74', 'value': '74'},
{'from': '45', 'to': '5', 'title': '62', 'value': '62'},
{'from': '69', 'to': '14', 'title': '30', 'value': '30'},
{'from': '18', 'to': '5', 'title': '62', 'value': '62'},
{'from': '2', 'to': '26', 'title': '52', 'value': '52'},
{'from': '8', 'to': '10', 'title': '32', 'value': '32'},
{'from': '10', 'to': '26', 'title': '43', 'value': '43'},
{'from': '6', 'to': '26', 'title': '31', 'value': '31'},
{'from': '18', 'to': '2', 'title': '60', 'value': '60'},
{'from': '5', 'to': '24', 'title': '27', 'value': '27'},
{'from': '3', 'to': '5', 'title': '61', 'value': '61'},
{'from': '3', 'to': '10', 'title': '37', 'value': '37'},
{'from': '25', 'to': '2', 'title': '32', 'value': '32'},
{'from': '25', 'to': '15', 'title': '47', 'value': '47'},
{'from': '2', 'to': '53', 'title': '39', 'value': '39'},
{'from': '57', 'to': '2', 'title': '37', 'value': '37'},
{'from': '2', 'to': '49', 'title': '46', 'value': '46'},
{'from': '117', 'to': '2', 'title': '40', 'value': '40'},
{'from': '2', 'to': '32', 'title': '33', 'value': '33'},
{'from': '10', 'to': '24', 'title': '32', 'value': '32'},
{'from': '94', 'to': '5', 'title': '44', 'value': '44'},
{'from': '2', 'to': '70', 'title': '38', 'value': '38'},
{'from': '157', 'to': '2', 'title': '39', 'value': '39'},
{'from': '2', 'to': '27', 'title': '55', 'value': '55'},
{'from': '6', 'to': '3', 'title': '79', 'value': '79'},
{'from': '10', 'to': '15', 'title': '58', 'value': '58'},
{'from': '1', 'to': '14', 'title': '88', 'value': '88'},
{'from': '118', 'to': '5', 'title': '42', 'value': '42'},
{'from': '95', 'to': '15', 'title': '25', 'value': '25'},
{'from': '5', 'to': '17', 'title': '67', 'value': '67'},
{'from': '16', 'to': '5', 'title': '34', 'value': '34'},
{'from': '5', 'to': '80', 'title': '28', 'value': '28'},
{'from': '10', 'to': '34', 'title': '83', 'value': '83'},
{'from': '33', 'to': '5', 'title': '44', 'value': '44'},
{'from': '5', 'to': '5', 'title': '137', 'value': '137'},
{'from': '2', 'to': '30', 'title': '70', 'value': '70'},
{'from': '46', 'to': '14', 'title': '26', 'value': '26'},
{'from': '16', 'to': '14', 'title': '74', 'value': '74'},
{'from': '6', 'to': '17', 'title': '44', 'value': '44'},
{'from': '10', 'to': '94', 'title': '40', 'value': '40'},
{'from': '22', 'to': '5', 'title': '64', 'value': '64'},
{'from': '81', 'to': '5', 'title': '31', 'value': '31'},
{'from': '81', 'to': '4', 'title': '30', 'value': '30'},
{'from': '40', 'to': '10', 'title': '63', 'value': '63'},
{'from': '1', 'to': '15', 'title': '58', 'value': '58'},
{'from': '1', 'to': '38', 'title': '74', 'value': '74'},
{'from': '10', 'to': '36', 'title': '80', 'value': '80'},
{'from': '27', 'to': '50', 'title': '25', 'value': '25'},
{'from': '7', 'to': '14', 'title': '59', 'value': '59'},
{'from': '8', 'to': '15', 'title': '76', 'value': '76'},
{'from': '2', 'to': '91', 'title': '35', 'value': '35'},
{'from': '17', 'to': '4', 'title': '54', 'value': '54'},
{'from': '10', 'to': '82', 'title': '42', 'value': '42'},
{'from': '7', 'to': '38', 'title': '27', 'value': '27'},
{'from': '16', 'to': '10', 'title': '100', 'value': '100'},
{'from': '10', 'to': '7', 'title': '64', 'value': '64'},
{'from': '10', 'to': '25', 'title': '63', 'value': '63'},
{'from': '1', 'to': '5', 'title': '125', 'value': '125'},
{'from': '29', 'to': '2', 'title': '53', 'value': '53'},
{'from': '38', 'to': '59', 'title': '27', 'value': '27'},
{'from': '6', 'to': '1', 'title': '161', 'value': '161'},
{'from': '6', 'to': '38', 'title': '51', 'value': '51'},
{'from': '6', 'to': '59', 'title': '51', 'value': '51'},
{'from': '9', 'to': '6', 'title': '33', 'value': '33'},
{'from': '6', 'to': '29', 'title': '30', 'value': '30'},
{'from': '62', 'to': '2', 'title': '26', 'value': '26'},
{'from': '4', 'to': '7', 'title': '126', 'value': '126'},
{'from': '10', 'to': '19', 'title': '47', 'value': '47'},
{'from': '4', 'to': '49', 'title': '30', 'value': '30'},
{'from': '2', 'to': '44', 'title': '31', 'value': '31'},
{'from': '6', 'to': '67', 'title': '49', 'value': '49'},
{'from': '6', 'to': '24', 'title': '31', 'value': '31'},
{'from': '6', 'to': '31', 'title': '31', 'value': '31'},
{'from': '10', 'to': '17', 'title': '68', 'value': '68'},
{'from': '33', 'to': '2', 'title': '37', 'value': '37'},
{'from': '163', 'to': '2', 'title': '41', 'value': '41'},
{'from': '164', 'to': '50', 'title': '36', 'value': '36'},
{'from': '4', 'to': '38', 'title': '49', 'value': '49'},
{'from': '41', 'to': '4', 'title': '35', 'value': '35'},
{'from': '40', 'to': '5', 'title': '40', 'value': '40'},
{'from': '5', 'to': '167', 'title': '31', 'value': '31'},
{'from': '10', 'to': '45', 'title': '33', 'value': '33'},
{'from': '4', 'to': '55', 'title': '36', 'value': '36'},
{'from': '4', 'to': '11', 'title': '93', 'value': '93'},
{'from': '1', 'to': '4', 'title': '138', 'value': '138'},
{'from': '33', 'to': '15', 'title': '28', 'value': '28'},
{'from': '17', 'to': '15', 'title': '46', 'value': '46'},
{'from': '171', 'to': '10', 'title': '36', 'value': '36'},
{'from': '33', 'to': '10', 'title': '31', 'value': '31'},
{'from': '10', 'to': '10', 'title': '73', 'value': '73'},
{'from': '6', 'to': '10', 'title': '73', 'value': '73'},
{'from': '6', 'to': '4', 'title': '85', 'value': '85'},
{'from': '4', 'to': '99', 'title': '33', 'value': '33'},
{'from': '9', 'to': '5', 'title': '35', 'value': '35'},
{'from': '5', 'to': '21', 'title': '47', 'value': '47'},
{'from': '22', 'to': '4', 'title': '36', 'value': '36'},
{'from': '6', 'to': '22', 'title': '51', 'value': '51'},
{'from': '60', 'to': '4', 'title': '42', 'value': '42'},
{'from': '6', 'to': '18', 'title': '34', 'value': '34'},
{'from': '83', 'to': '5', 'title': '42', 'value': '42'},
{'from': '10', 'to': '127', 'title': '28', 'value': '28'},
{'from': '5', 'to': '127', 'title': '27', 'value': '27'},
{'from': '5', 'to': '38', 'title': '31', 'value': '31'},
{'from': '8', 'to': '5', 'title': '85', 'value': '85'},
{'from': '6', 'to': '68', 'title': '138', 'value': '138'},
{'from': '15', 'to': '51', 'title': '36', 'value': '36'},
{'from': '2', 'to': '36', 'title': '33', 'value': '33'},
{'from': '126', 'to': '2', 'title': '26', 'value': '26'},
{'from': '10', 'to': '1', 'title': '59', 'value': '59'},
{'from': '5', 'to': '30', 'title': '29', 'value': '29'},
{'from': '175', 'to': '5', 'title': '69', 'value': '69'},
{'from': '12', 'to': '14', 'title': '32', 'value': '32'},
{'from': '6', 'to': '55', 'title': '27', 'value': '27'},
{'from': '6', 'to': '45', 'title': '28', 'value': '28'},
{'from': '2', 'to': '176', 'title': '38', 'value': '38'},
{'from': '4', 'to': '114', 'title': '33', 'value': '33'},
{'from': '16', 'to': '4', 'title': '47', 'value': '47'},
{'from': '6', 'to': '27', 'title': '36', 'value': '36'},
{'from': '179', 'to': '5', 'title': '35', 'value': '35'},
{'from': '40', 'to': '15', 'title': '36', 'value': '36'},
{'from': '6', 'to': '14', 'title': '44', 'value': '44'},
{'from': '27', 'to': '14', 'title': '37', 'value': '37'},
{'from': '15', 'to': '26', 'title': '45', 'value': '45'},
{'from': '184', 'to': '5', 'title': '36', 'value': '36'},
{'from': '8', 'to': '14', 'title': '57', 'value': '57'},
{'from': '2', 'to': '55', 'title': '37', 'value': '37'},
{'from': '13', 'to': '4', 'title': '54', 'value': '54'},
{'from': '10', 'to': '12', 'title': '52', 'value': '52'},
{'from': '17', 'to': '14', 'title': '30', 'value': '30'},
{'from': '39', 'to': '5', 'title': '27', 'value': '27'},
{'from': '29', 'to': '5', 'title': '35', 'value': '35'},
{'from': '16', 'to': '15', 'title': '30', 'value': '30'},
{'from': '37', 'to': '4', 'title': '26', 'value': '26'},
{'from': '5', 'to': '49', 'title': '40', 'value': '40'},
{'from': '10', 'to': '30', 'title': '35', 'value': '35'},
{'from': '6', 'to': '7', 'title': '58', 'value': '58'},
{'from': '5', 'to': '11', 'title': '53', 'value': '53'},
{'from': '5', 'to': '12', 'title': '34', 'value': '34'},
{'from': '34', 'to': '5', 'title': '29', 'value': '29'},
{'from': '32', 'to': '4', 'title': '27', 'value': '27'},
{'from': '27', 'to': '5', 'title': '41', 'value': '41'},
{'from': '27', 'to': '4', 'title': '40', 'value': '40'},
{'from': '20', 'to': '5', 'title': '57', 'value': '57'},
{'from': '29', 'to': '15', 'title': '32', 'value': '32'},
{'from': '32', 'to': '15', 'title': '47', 'value': '47'},
{'from': '192', 'to': '2', 'title': '29', 'value': '29'},
{'from': '10', 'to': '78', 'title': '38', 'value': '38'},
{'from': '6', 'to': '16', 'title': '37', 'value': '37'},
{'from': '6', 'to': '100', 'title': '29', 'value': '29'},
{'from': '48', 'to': '14', 'title': '29', 'value': '29'},
{'from': '6', 'to': '21', 'title': '34', 'value': '34'},
{'from': '60', 'to': '15', 'title': '39', 'value': '39'},
{'from': '25', 'to': '38', 'title': '38', 'value': '38'},
{'from': '6', 'to': '25', 'title': '45', 'value': '45'},
{'from': '4', 'to': '12', 'title': '41', 'value': '41'},
{'from': '59', 'to': '14', 'title': '31', 'value': '31'},
{'from': '15', 'to': '12', 'title': '43', 'value': '43'},
{'from': '2', 'to': '88', 'title': '46', 'value': '46'},
{'from': '6', 'to': '44', 'title': '26', 'value': '26'},
{'from': '38', 'to': '36', 'title': '32', 'value': '32'},
{'from': '46', 'to': '4', 'title': '48', 'value': '48'},
{'from': '92', 'to': '4', 'title': '46', 'value': '46'},
{'from': '42', 'to': '4', 'title': '29', 'value': '29'},
{'from': '6', 'to': '15', 'title': '37', 'value': '37'},
{'from': '6', 'to': '41', 'title': '31', 'value': '31'},
{'from': '6', 'to': '12', 'title': '37', 'value': '37'},
{'from': '6', 'to': '56', 'title': '25', 'value': '25'},
{'from': '45', 'to': '4', 'title': '37', 'value': '37'},
{'from': '22', 'to': '15', 'title': '29', 'value': '29'},
{'from': '34', 'to': '4', 'title': '43', 'value': '43'},
{'from': '204', 'to': '5', 'title': '33', 'value': '33'},
{'from': '10', 'to': '205', 'title': '30', 'value': '30'},
{'from': '62', 'to': '4', 'title': '37', 'value': '37'},
{'from': '5', 'to': '51', 'title': '35', 'value': '35'},
{'from': '70', 'to': '14', 'title': '48', 'value': '48'},
{'from': '60', 'to': '2', 'title': '41', 'value': '41'},
{'from': '40', 'to': '50', 'title': '45', 'value': '45'},
{'from': '37', 'to': '6', 'title': '35', 'value': '35'},
{'from': '2', 'to': '138', 'title': '26', 'value': '26'},
{'from': '10', 'to': '83', 'title': '29', 'value': '29'},
{'from': '47', 'to': '4', 'title': '26', 'value': '26'},
{'from': '10', 'to': '22', 'title': '25', 'value': '25'},
{'from': '22', 'to': '14', 'title': '29', 'value': '29'},
{'from': '65', 'to': '4', 'title': '26', 'value': '26'},
{'from': '3', 'to': '50', 'title': '25', 'value': '25'},
{'from': '64', 'to': '4', 'title': '43', 'value': '43'},
{'from': '10', 'to': '50', 'title': '29', 'value': '29'},
{'from': '83', 'to': '50', 'title': '27', 'value': '27'},
{'from': '5', 'to': '66', 'title': '27', 'value': '27'},
{'from': '50', 'to': '50', 'title': '47', 'value': '47'},
{'from': '18', 'to': '10', 'title': '46', 'value': '46'},
{'from': '2', 'to': '45', 'title': '27', 'value': '27'},
{'from': '214', 'to': '5', 'title': '26', 'value': '26'},
{'from': '115', 'to': '5', 'title': '31', 'value': '31'},
{'from': '139', 'to': '2', 'title': '31', 'value': '31'},
{'from': '74', 'to': '50', 'title': '55', 'value': '55'},
];
