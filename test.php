<?php
error_reporting(E_ALL);
require_once "required/config.php";
$portfolio = array (
    0 => 
    array (
        'id' => '1',
        'url' => 'hermes-technic',
        'name' => 'Hermes Technic',
        'monitor' => true,
        'category' => 
        array (
            0 => 'favorite',
            1 => 'frontend',
            2 => 'identification',
        ),
        'description' => 'Logo, website, business cards',
        'descriptionLong' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'images' => 
        array (
            0 => 'splash.jpg',
        ),
        'previous' => 'portfolio',
        'next' => 'jaklon-zaopatrzenie',
    ),
    1 => 
    array (
        'id' => '1',
        'url' => 'hermes-technic',
        'name' => 'Hermes Technic',
        'monitor' => true,
        'category' => 
        array (
            0 => 'favorite',
            1 => 'frontend',
            2 => 'identification',
        ),
        'description' => 'Logo, website, business cards',
        'descriptionLong' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'images' => 
        array (
            0 => 'splash.jpg',
        ),
        'previous' => 'portfolio',
        'next' => 'jaklon-zaopatrzenie',
    )
);

print_r($portfolio);

echo "<br><br>";

$sqlQueryPortfolio = "SELECT * FROM `portfolio_items`";
$result = mysqli_query($link, $sqlQueryPortfolio);

$itemki = array();
$i = 0;
if ($result->num_rows > 0) {
    while ($r = $result->fetch_assoc()) {
        $id = $r['id'];
        $sqlQueryKat = "SELECT * FROM `portfolio_categories` WHERE item_id = '$id'";
        $resultkat = mysqli_query($link, $sqlQueryKat);
        $kategorie = array();
        if ($resultkat->num_rows > 0) {
            while ($k = $resultkat->fetch_assoc()) {
                array_push($kategorie, $k['category_name']);
            }
        }
        $monitor = (bool)$r['monitor'];
        $itemek = array(
            'id' => $i,
            'url' => $r['url'],
            'name' => $r['name'],
            'monitor' => $monitor,
            'category' => $kategorie,
            'description' => $r['description'],
            'descriptionLong' => $r['descriptionLong'],
            'images' => 
            array (
                0 => 'splash.jpg',
            ),
            'previous' => $r['previous'],
            'next' => $r['next']
        );
    
        array_push($itemki, $itemek);
        $i++;
    }
}

print_r($itemki);


$fp = fopen('static/portfolio-items.json', 'w');
fwrite($fp, json_encode($itemki));
fclose($fp);

?>