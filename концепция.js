var nodes = [{'id': '14', 'label': 'художественный', 'title': 'Литературоведение, 1489', 'value': '32', 'group': '3', 'shape': 'diamond'},
{'id': '34', 'label': 'поэтика', 'title': 'Литературоведение, 642', 'value': '16', 'group': '3', 'shape': 'diamond'},
{'id': '69', 'label': 'концепция', 'title': 'Философский и др. дискурсы, 149', 'value': '5', 'group': '3', 'shape': 'triangle', 'font': {'strokeWidth': 10, 'strokeColor': '#ffffff'}},
{'id': '1', 'label': 'роман', 'title': 'Литературоведение, 5261', 'value': '73', 'group': '0', 'shape': 'diamond'},
{'id': '16', 'label': 'жанр', 'title': 'Историческая поэтика, 1394', 'value': '30', 'group': '3', 'shape': 'dot'},
{'id': '13', 'label': 'идея', 'title': 'Литературоведение, 1700', 'value': '35', 'group': '0', 'shape': 'diamond'},
];
var edges = [{'from': '104', 'to': '14', 'title': '28', 'value': '28'},
{'from': '13', 'to': '32', 'title': '36', 'value': '36'},
{'from': '3', 'to': '14', 'title': '36', 'value': '36'},
{'from': '15', 'to': '14', 'title': '141', 'value': '141'},
{'from': '3', 'to': '13', 'title': '82', 'value': '82'},
{'from': '13', 'to': '12', 'title': '50', 'value': '50'},
{'from': '13', 'to': '28', 'title': '27', 'value': '27'},
{'from': '13', 'to': '2', 'title': '111', 'value': '111'},
{'from': '13', 'to': '7', 'title': '30', 'value': '30'},
{'from': '13', 'to': '15', 'title': '52', 'value': '52'},
{'from': '62', 'to': '13', 'title': '25', 'value': '25'},
{'from': '9', 'to': '13', 'title': '51', 'value': '51'},
{'from': '34', 'to': '7', 'title': '44', 'value': '44'},
{'from': '13', 'to': '11', 'title': '54', 'value': '54'},
{'from': '8', 'to': '13', 'title': '54', 'value': '54'},
{'from': '19', 'to': '1', 'title': '86', 'value': '86'},
{'from': '107', 'to': '1', 'title': '123', 'value': '123'},
{'from': '108', 'to': '1', 'title': '117', 'value': '117'},
{'from': '13', 'to': '77', 'title': '35', 'value': '35'},
{'from': '18', 'to': '13', 'title': '38', 'value': '38'},
{'from': '51', 'to': '14', 'title': '36', 'value': '36'},
{'from': '32', 'to': '14', 'title': '29', 'value': '29'},
{'from': '2', 'to': '14', 'title': '56', 'value': '56'},
{'from': '13', 'to': '35', 'title': '26', 'value': '26'},
{'from': '13', 'to': '29', 'title': '52', 'value': '52'},
{'from': '23', 'to': '13', 'title': '28', 'value': '28'},
{'from': '13', 'to': '13', 'title': '105', 'value': '105'},
{'from': '34', 'to': '78', 'title': '36', 'value': '36'},
{'from': '21', 'to': '14', 'title': '41', 'value': '41'},
{'from': '4', 'to': '14', 'title': '53', 'value': '53'},
{'from': '149', 'to': '14', 'title': '26', 'value': '26'},
{'from': '150', 'to': '14', 'title': '27', 'value': '27'},
{'from': '26', 'to': '14', 'title': '32', 'value': '32'},
{'from': '38', 'to': '14', 'title': '32', 'value': '32'},
{'from': '40', 'to': '14', 'title': '27', 'value': '27'},
{'from': '1', 'to': '1', 'title': '203', 'value': '203'},
{'from': '19', 'to': '14', 'title': '53', 'value': '53'},
{'from': '13', 'to': '69', 'title': '26', 'value': '26'},
{'from': '16', 'to': '30', 'title': '45', 'value': '45'},
{'from': '10', 'to': '14', 'title': '119', 'value': '119'},
{'from': '13', 'to': '14', 'title': '41', 'value': '41'},
{'from': '13', 'to': '10', 'title': '31', 'value': '31'},
{'from': '13', 'to': '5', 'title': '81', 'value': '81'},
{'from': '6', 'to': '13', 'title': '68', 'value': '68'},
{'from': '14', 'to': '151', 'title': '26', 'value': '26'},
{'from': '5', 'to': '14', 'title': '72', 'value': '72'},
{'from': '13', 'to': '30', 'title': '30', 'value': '30'},
{'from': '2', 'to': '1', 'title': '187', 'value': '187'},
{'from': '34', 'to': '19', 'title': '33', 'value': '33'},
{'from': '16', 'to': '27', 'title': '30', 'value': '30'},
{'from': '16', 'to': '38', 'title': '40', 'value': '40'},
{'from': '69', 'to': '14', 'title': '30', 'value': '30'},
{'from': '16', 'to': '33', 'title': '25', 'value': '25'},
{'from': '3', 'to': '1', 'title': '307', 'value': '307'},
{'from': '1', 'to': '14', 'title': '88', 'value': '88'},
{'from': '1', 'to': '51', 'title': '39', 'value': '39'},
{'from': '1', 'to': '26', 'title': '45', 'value': '45'},
{'from': '1', 'to': '17', 'title': '39', 'value': '39'},
{'from': '16', 'to': '5', 'title': '34', 'value': '34'},
{'from': '16', 'to': '19', 'title': '66', 'value': '66'},
{'from': '16', 'to': '39', 'title': '30', 'value': '30'},
{'from': '16', 'to': '16', 'title': '62', 'value': '62'},
{'from': '8', 'to': '16', 'title': '35', 'value': '35'},
{'from': '10', 'to': '34', 'title': '83', 'value': '83'},
{'from': '39', 'to': '1', 'title': '49', 'value': '49'},
{'from': '46', 'to': '14', 'title': '26', 'value': '26'},
{'from': '16', 'to': '14', 'title': '74', 'value': '74'},
{'from': '81', 'to': '16', 'title': '27', 'value': '27'},
{'from': '33', 'to': '13', 'title': '29', 'value': '29'},
{'from': '1', 'to': '15', 'title': '58', 'value': '58'},
{'from': '16', 'to': '1', 'title': '103', 'value': '103'},
{'from': '1', 'to': '38', 'title': '74', 'value': '74'},
{'from': '7', 'to': '14', 'title': '59', 'value': '59'},
{'from': '1', 'to': '70', 'title': '25', 'value': '25'},
{'from': '34', 'to': '97', 'title': '31', 'value': '31'},
{'from': '96', 'to': '34', 'title': '32', 'value': '32'},
{'from': '34', 'to': '98', 'title': '35', 'value': '35'},
{'from': '16', 'to': '69', 'title': '36', 'value': '36'},
{'from': '16', 'to': '17', 'title': '68', 'value': '68'},
{'from': '16', 'to': '10', 'title': '100', 'value': '100'},
{'from': '16', 'to': '25', 'title': '59', 'value': '59'},
{'from': '1', 'to': '5', 'title': '125', 'value': '125'},
{'from': '6', 'to': '1', 'title': '161', 'value': '161'},
{'from': '20', 'to': '1', 'title': '30', 'value': '30'},
{'from': '1', 'to': '161', 'title': '44', 'value': '44'},
{'from': '162', 'to': '1', 'title': '219', 'value': '219'},
{'from': '54', 'to': '13', 'title': '38', 'value': '38'},
{'from': '1', 'to': '4', 'title': '138', 'value': '138'},
{'from': '1', 'to': '11', 'title': '69', 'value': '69'},
{'from': '1', 'to': '91', 'title': '32', 'value': '32'},
{'from': '28', 'to': '1', 'title': '101', 'value': '101'},
{'from': '18', 'to': '1', 'title': '68', 'value': '68'},
{'from': '1', 'to': '24', 'title': '89', 'value': '89'},
{'from': '79', 'to': '1', 'title': '38', 'value': '38'},
{'from': '8', 'to': '1', 'title': '188', 'value': '188'},
{'from': '111', 'to': '1', 'title': '55', 'value': '55'},
{'from': '13', 'to': '1', 'title': '125', 'value': '125'},
{'from': '13', 'to': '51', 'title': '30', 'value': '30'},
{'from': '43', 'to': '1', 'title': '54', 'value': '54'},
{'from': '1', 'to': '12', 'title': '63', 'value': '63'},
{'from': '69', 'to': '34', 'title': '30', 'value': '30'},
{'from': '34', 'to': '1', 'title': '37', 'value': '37'},
{'from': '33', 'to': '1', 'title': '68', 'value': '68'},
{'from': '1', 'to': '128', 'title': '47', 'value': '47'},
{'from': '1', 'to': '30', 'title': '87', 'value': '87'},
{'from': '69', 'to': '1', 'title': '27', 'value': '27'},
{'from': '62', 'to': '1', 'title': '33', 'value': '33'},
{'from': '25', 'to': '1', 'title': '62', 'value': '62'},
{'from': '1', 'to': '129', 'title': '39', 'value': '39'},
{'from': '1', 'to': '125', 'title': '41', 'value': '41'},
{'from': '1', 'to': '49', 'title': '37', 'value': '37'},
{'from': '1', 'to': '7', 'title': '152', 'value': '152'},
{'from': '13', 'to': '44', 'title': '28', 'value': '28'},
{'from': '44', 'to': '1', 'title': '33', 'value': '33'},
{'from': '29', 'to': '1', 'title': '57', 'value': '57'},
{'from': '173', 'to': '1', 'title': '30', 'value': '30'},
{'from': '1', 'to': '67', 'title': '43', 'value': '43'},
{'from': '1', 'to': '86', 'title': '26', 'value': '26'},
{'from': '1', 'to': '87', 'title': '58', 'value': '58'},
{'from': '1', 'to': '21', 'title': '51', 'value': '51'},
{'from': '1', 'to': '174', 'title': '51', 'value': '51'},
{'from': '10', 'to': '1', 'title': '59', 'value': '59'},
{'from': '12', 'to': '14', 'title': '32', 'value': '32'},
{'from': '27', 'to': '1', 'title': '47', 'value': '47'},
{'from': '1', 'to': '121', 'title': '59', 'value': '59'},
{'from': '16', 'to': '4', 'title': '47', 'value': '47'},
{'from': '120', 'to': '1', 'title': '36', 'value': '36'},
{'from': '117', 'to': '1', 'title': '27', 'value': '27'},
{'from': '16', 'to': '34', 'title': '53', 'value': '53'},
{'from': '6', 'to': '14', 'title': '44', 'value': '44'},
{'from': '27', 'to': '14', 'title': '37', 'value': '37'},
{'from': '37', 'to': '1', 'title': '114', 'value': '114'},
{'from': '72', 'to': '1', 'title': '28', 'value': '28'},
{'from': '1', 'to': '53', 'title': '31', 'value': '31'},
{'from': '8', 'to': '14', 'title': '57', 'value': '57'},
{'from': '13', 'to': '4', 'title': '54', 'value': '54'},
{'from': '34', 'to': '17', 'title': '36', 'value': '36'},
{'from': '17', 'to': '14', 'title': '30', 'value': '30'},
{'from': '22', 'to': '1', 'title': '130', 'value': '130'},
{'from': '1', 'to': '31', 'title': '34', 'value': '34'},
{'from': '16', 'to': '15', 'title': '30', 'value': '30'},
{'from': '16', 'to': '119', 'title': '35', 'value': '35'},
{'from': '48', 'to': '1', 'title': '25', 'value': '25'},
{'from': '23', 'to': '1', 'title': '38', 'value': '38'},
{'from': '34', 'to': '5', 'title': '29', 'value': '29'},
{'from': '9', 'to': '1', 'title': '37', 'value': '37'},
{'from': '1', 'to': '191', 'title': '26', 'value': '26'},
{'from': '1', 'to': '59', 'title': '43', 'value': '43'},
{'from': '13', 'to': '21', 'title': '42', 'value': '42'},
{'from': '6', 'to': '16', 'title': '37', 'value': '37'},
{'from': '16', 'to': '100', 'title': '29', 'value': '29'},
{'from': '48', 'to': '14', 'title': '29', 'value': '29'},
{'from': '132', 'to': '1', 'title': '27', 'value': '27'},
{'from': '60', 'to': '1', 'title': '44', 'value': '44'},
{'from': '59', 'to': '14', 'title': '31', 'value': '31'},
{'from': '16', 'to': '195', 'title': '37', 'value': '37'},
{'from': '16', 'to': '7', 'title': '29', 'value': '29'},
{'from': '47', 'to': '1', 'title': '47', 'value': '47'},
{'from': '16', 'to': '44', 'title': '34', 'value': '34'},
{'from': '16', 'to': '197', 'title': '27', 'value': '27'},
{'from': '16', 'to': '198', 'title': '29', 'value': '29'},
{'from': '135', 'to': '1', 'title': '29', 'value': '29'},
{'from': '20', 'to': '13', 'title': '32', 'value': '32'},
{'from': '13', 'to': '80', 'title': '29', 'value': '29'},
{'from': '34', 'to': '34', 'title': '43', 'value': '43'},
{'from': '22', 'to': '34', 'title': '34', 'value': '34'},
{'from': '34', 'to': '4', 'title': '43', 'value': '43'},
{'from': '70', 'to': '14', 'title': '48', 'value': '48'},
{'from': '136', 'to': '1', 'title': '29', 'value': '29'},
{'from': '1', 'to': '210', 'title': '27', 'value': '27'},
{'from': '22', 'to': '14', 'title': '29', 'value': '29'},
{'from': '13', 'to': '22', 'title': '25', 'value': '25'},
{'from': '16', 'to': '66', 'title': '31', 'value': '31'},
{'from': '16', 'to': '22', 'title': '80', 'value': '80'},
{'from': '13', 'to': '27', 'title': '30', 'value': '30'},
];
