<View style={styles.container}>
<CustomStatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
<Header />
<View style={styles.searchSection}>
  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
</View>
<ScrollView showsVerticalScrollIndicator={false}>
  <BookContainer />
  {filteredResult.map((result, index) => (
    <SearchResultItem key={index} result={result} />
  ))}
</ScrollView>
<Bottom />
</View>