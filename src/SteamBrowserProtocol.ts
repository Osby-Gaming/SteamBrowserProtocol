/**
 * Based on https://developer.valvesoftware.com/wiki/Steam_browser_protocol
 * Every function returns a string that can be used in most contexts. Just open the URL provided by the function.
 */

export default class SteamBrowserProtocol {
  /**
   * Opens Steam with command line arguments
   * @param commands? The command line arguments to pass to Steam
   */
  static openSteam(commands = "") {
    return `steam:"${commands}"`;
  }
  /**
   * Opens the Steam checklist menu to add non-Steam games.
   */
  static addNoneSteamGame() {
    return `steam://AddNonSteamGame`;
  }
  /**
   * Opens the store to an application's page.
   * @param id The application's app ID
   */
  static advertise(id: string) {
    return `steam://advertise/${id}`;
  }
  /**
   * Accepts the specified Gift or Guest Pass.
   * @param pass The Gift or Guest Pass to accept
   */
  static ackMessage(pass: string) {
    return `steam://ackGuestPass/${pass}`;
  }

  /**
   * Opens up the news page for an app.
   * @param id The application's app ID
   */
  static appNews(id: string) {
    return `steam://appnews/${id}`;
  }

  /**
   * Opens up the Backup Wizard and checks the specified application. If an application is not specified then nothing will be checked.
   * @param id The application's app ID
   */
  static backup(id: string) {
    return `steam://backup/${id}`;
  }

  /**
   * Opens a broadcast window to watch a user's broadcast.
   * @param steamid64 The user's steam ID64
   */
  static broadcastWatch(steamid64: string) {
    return `steam://broadcast/watch/${steamid64}`;
  }

  static browseMedia() {
    return `steam://browsemedia`;
  }

  static cdKeys(appid: string) {
    return `steam://cdkeys/${appid}`;
  }

  /**
   * Checks if users computer meets system requirements of app.
   * @param id The application's app ID
   * @deprecated
   */
  static checkSysReqs(id: string) {
    return `steam://checksysreqs/${id}`;
  }

  /**
   * Connects the user to the server specified by the IP. You don't have to specify anything else to connect to a third party mod server, everything will be automatically detected.
   * @param ip The server's IP
   * @param port The server's port
   * @param password The server's password
   */
  static connect(ip: string, port?: string, password?: string) {
    let ipWithPort = `${ip}`;
    if (port) ipWithPort += `:${port}`;
    if (password) ipWithPort += `/${password}`;
    return `steam://connect/${ipWithPort}`;
  }

  /**
   * Opens the controller configurator (Steam Input) for the specified game.
   * @param id The application's app ID
   */
  static controllerConfig(id: string) {
    return `steam://controllerconfig/${id}`;
  }

  /**
   * Defragments files of the application.
   * @param id The application's app ID
   */
  static defrag(id: string) {
    return `steam://defrag/${id}`;
  }

  /**
   * Exits the Steam application.
   */
  static exit() {
    return `steam://exit`;
  }

  /**
   * Opens Friends
   */
  static friends(id: string) {
    return `steam://friends/`;
  }

  /**
   * Opens the Friends window and adds the specified user.
   * @param id The user's steam ID64
   */
  static friendsAdd(id: string) {
    return `steam://friends/add/${id}`;
  }

  /**
   * Joins a chat with a specified id number
   * @param id The chat's ID
   */
  static joinChat(id: string) {
    return `steam://friends/joinchat/${id}`;
  }

  /**
   * Send a message
   * @param id The chat's ID
   */
  static message(id: string) {
    return `steam://friends/message/${id}`;
  }

  /**
   * Shows table of recent players you've played with
   */
  static players() {
    return `steam://friends/players`;
  }

  /**
   * Opens the Friends window and toggles whether or not offline friends are shown.
   */
  static settingsHideOffline() {
    return `steam://friends/settings/hideoffline`;
  }

  /**
   * Opens the Friends window and toggles whether or not avatars are shown.
   */
  static settingsShowAvatars() {
    return `steam://friends/settings/showavatars`;
  }

  /**
   * Opens the Friends window and toggles whether or not friends are sorted by name.
   */
  static settingsSortByName() {
    return `steam://friends/settings/sortbyname`;
  }

  /**
   * Sets status as away
   */
  static statusAway() {
    return `steam://friends/status/away`;
  }

  /**
   * Sets status as busy
   * @deprecated
   */
  static statusBusy() {
    return `steam://friends/status/busy`;
  }

  /**
   * Sets status as invisible
   */
  static statusInvisible() {
    return `steam://friends/status/invisible`;
  }

  /**
   * Sets status as looking to trade
   * @deprecated
   */
  static statusTrade() {
    return `steam://friends/status/trade`;
  }

  /**
   * Sets status as looking to play
   * @deprecated
   */
  static statusPlay() {
    return `steam://friends/status/play`;
  }

  /**
   * Sets status as offline
   */
  static statusOffline() {
    return `steam://friends/status/offline`;
  }

  /**
   * Sets status as online
   */
  static statusOnline() {
    return `steam://friends/status/online`;
  }

  /**
   * Flushes and reloads the configs for each application (beta availability, etc.)
   */
  static flushConfig() {
    return `steam://flushconfig/`;
  }

  /**
   * Forces the steam controller driver to use the layout for the given game or shortcut, without the need to use the in-game overlay, big picture mode, or even run the application at all.
   * @param id The application's app ID or the shortcut name
   */
  static forceInputAppId(id: string) {
    return `steam://forceinputappid/${id}`;
  }

  /**
   * Opens the properties for the specified game.
   * @param id The application's app ID
   */
  static gameProperties(id: string) {
    return `steam://gameproperties/${id}`;
  }

  /**
   * Opens up the Guest Passes window.
   */
  static guestPasses() {
    return `steam://guestpasses/`;
  }

  /**
   * Tests whether the user has hardware that matches a promotional offer. No longer works.
   * @param id The promotional offer's ID
   * @deprecated
   */
  static hardwarePromo(id: string) {
    return `steam://hardwarepromo/${id}`;
  }

  /**
   * Installs an application.
   * @param id The application's app ID
   */
  static install(id: string) {
    return `steam://install/${id}`;
  }

  /**
   * Installs the specified add-on.
   * @param addon The add-on's name
   */
  static installAddon(addon: string) {
    return `steam://installaddon/${addon}`;
  }

  /**
   * Plays music in the music player
   */
  static playMusic() {
    return `steam://musicplayer/play`;
  }

  /**
   * Pauses music in the music player
   */
  static pauseMusic() {
    return `steam://musicplayer/pause`;
  }

  /**
   * Toggles play/pause in the music player
   */
  static togglePlayPause() {
    return `steam://musicplayer/toggleplaypause`;
  }

  /**
   * Plays the previous song in the music player
   */
  static playPrevious() {
    return `steam://musicplayer/playprevious`;
  }

  /**
   * Plays the next song in the music player
   */
  static playNext() {
    return `steam://musicplayer/playnext`;
  }

  /**
   * Toggles mute in the music player
   */
  static toggleMute() {
    return `steam://musicplayer/togglemute`;
  }

  /**
   * Increases the volume in the music player
   */
  static increaseVolume() {
    return `steam://musicplayer/increasevolume`;
  }

  /**
   * Decreases the volume in the music player
   */
  static decreaseVolume() {
    return `steam://musicplayer/decreasevolume`;
  }

  /**
   * Toggles whether or not the music player is playing a song
   */
  static togglePlayingRepeatStatus() {
    return `steam://musicplayer/toggleplayingshuffled`;
  }

  /**
   * Toggles whether or not the music player is playing a song
   */
  static togglePlayingShuffleStatus() {
    return `steam://musicplayer/toggleplayingshuffled`;
  }

  /**
   * Launches an application.
   * Same as run, but with support for multiple launch options.
   * @param id The application's app ID
   * @param dialog Launches the game using the user's preferred launch option, or asks which to use.
   */
  static launch(id: string, dialog = false) {
    return `steam://launch/${id}` + (dialog ? "/dialog" : "");
  }

  /**
   * Opens a Steam window, but doesn't make the Steam window active. Known <component> values:
   * console
   * downloads
   * games
   * games/details
   * games/details/<id>
   * games/grid
   * games/list
   * library/collection/hidden
   * media
   * music
   * tools
   * @param component The component to open
   */
  static nav(component: string) {
    return `steam://nav/${component}`;
  }

  /**
   * Opens a Steam window. Known <component> values:
   * - activateproduct
   * - bigpicture
   * - console
   * The steam developer console
   * - downloads
   * - friends
   * - games
   * - games/details
   * - games/grid
   * - games/list
   * - largegameslist
   * - minigameslist
   * - main
   * Your "favorite window".
   * - music
   * - musicplayer
   * - mymedia
   * - news
   * - registerproduct
   * CD key registration (e.g Prey)
   * - screenshots/<gameid>
   * - servers
   * - settings
   * - tools
   * @param component The component to open
   */
  static open(component: string) {
    return `steam://open/${component}`;
  }

  /**
   * Opens URL in the system's default web browser.
   * @param url The URL to open
   */
  static openUrl(url: string) {
    return `steam://openurl/${url}`;
  }

  /**
   * Opens URL in the system's default web browser.
   * @param url The URL to open
   */
  static openUrlExternal(url: string) {
    return `steam://openurl_external/${url}`;
  }

  /**
   * Cancels an ongoing PayPal transaction.
   */
  static paypalCancel() {
    return `steam://paypal/cancel`;
  }

  /**
   * Preloads an application.
   * @param id The application's app ID
   */
  static preload(id: string) {
    return `steam://preload/${id}`;
  }

  /**
   * Loads the specified publisher catalogue in the Store. Type the publisher's name in lowercase, e.g. activision or valve.
   * @param name The publisher's name
   */
  static publisher(name: string) {
    return `steam://publisher/${name}`;
  }

  /**
   * Opens a dialog box to buy an application from Steam.
   * @param id The application's app ID
   */
  static purchase(id: string) {
    return `steam://purchase/${id}`;
  }

  /**
   * Opens up a dialog box to buy a subscription to a Steam product/service. None are available yet.
   * @param id The application's app ID
   */
  static purchaseSubscription(id: string) {
    return `steam://purchase/subscription/${id}`;
  }

  /**
   * Uninstalls the specified add-on.
   * @param addon The add-on's name
   */
  static removeAddon(addon: string) {
    return `steam://removeaddon/${addon}`;
  }

  /**
   * Runs an application. It will be installed if necessary.
   * The //<args> is optional, args are passed to the application as launch parameters.
   * @param id The application's app ID
   * @param args The application's launch arguments
   */
  static run(id: string, args = "") {
    return `steam://run/${id}` + (args ? `//${args}` : "");
  }

  /**
   * Resets CVARs of a Source game.
   * @param id The application's app ID
   */
  static runsafe(id: string) {
    return `steam://runsafe/${id}`;
  }

  /**
   * Runs a game. It will be installed if necessary.
   * Same as run, but with support for mods and non-Steam shortcuts.
   * The //<args> is optional, args are passed to the application as launch parameters.
   * @param id The application's app ID
   * @param args The application's launch arguments
   */
  static runGame(id: string, args = "") {
    return `steam://rungameid/${id}` + (args ? `//${args}` : "");
  }

  /**
   * Opens up the settings. Also allows for subcommands for each page:
   * account
   * friends
   * interface
   * ingame
   * downloads
   * voice
   * @param id The application's app ID
   * @param page The page to open
   */
  static openSettings(id: string, page?: string) {
    return `steam://settings/${id}` + (page ? `/${page}` : "");
  }

  /**
   * Stops a currently running in-home streaming session
   */
  static stopStreaming() {
    return `steam://stopstreaming`;
  }

  /**
   * Opens up the store for an app, if no app is specified then the default one is opened.
   * @param id The application's app ID
   */
  static store(id: string) {
    return `steam://store/${id}`;
  }

  /**
   * Opens a dialog box with a checklist of the games specified allowing you to install them all at once.
   * @param id The applications' app IDs
   */
  static subscriptionInstall(id: string[]) {
    return `steam://subscriptioninstall/${id.join("/")}/`;
  }

  /**
   * Opens up the Support utility, and runs all of its tests. Enter a valid support string to filter results.
   * @param params Valid support strings
   * @deprecated
   */
  static support(params: string) {
    return `steam://support/${params}`;
  }

  /**
   * Takes a survey.
   * @param id The survey's ID
   */
  static takesurvey(id: string) {
    return `steam://takesurvey/${id}`;
  }

  /**
   * Deletes the specified apps' cache files.
   * @param id The applications' app IDs
   */
  static uninstall(id: string[]) {
    return `steam://uninstall/${id.join("/")}/`;
  }

  /**
   * Opens the Steam Controller firmware update screen.
   */
  static updateFirmware() {
    return `steam://UpdateFirmware`;
  }

  /**
   * Opens the news about the latest updates for an app.
   * @params id The application's app ID
   */
  static updateNews(id: string) {
    return `steam://updatenews/${id}`;
  }

  /**
   * Validates the local files of an app.
   * @param id The application's app ID
   */
  static validate(id: string) {
    return `steam://validate/${id}`;
  }

  /**
   * Views friends game
   * @param id64 The friends steam ID64
   */
  static viewFriendsGame(id64: string) {
    return `steam://viewfriendsgame/${id64}`;
  }

  static openChatBanListAdmin() {
    return `steam://ChatBanListAdmin/`;
  }

  static openCommentNotifications() {
    return `steam://CommentNotifications`;
  }

  /**
   * Opens a Workshop/Greenlight submission.
   * @param id The submission's ID
   */
  static openCommunityFilePage(id: string) {
    return `steam://url/CommunityFilePage/${id}`;
  }

  static openCommunityFriendsThatPlay(id: string) {
    return `steam://url/CommunityFriendsThatPlay/${id}`;
  }

  static openCommunityGroupSearch(searchTerm: string) {
    return `steam://url/CommunityGroupSearch/${searchTerm}`;
  }

  static openCommunityHome() {
    return `steam://url/CommunityHome/`;
  }

  static openCommunityInventory() {
    return `steam://url/CommunityInventory`;
  }

  static openCommunitySearch(searchTerm: string) {
    return `steam://url/CommunitySearch/${searchTerm}`;
  }

  static openDownloadsSupportInfo() {
    return `steam://url/DownloadsSupportInfo`;
  }

  static openEventAnnouncementPage(appId: string, eventAnnouncementId: string) {
    return `steam://url/EventAnnouncementPage/${appId}/${eventAnnouncementId}`;
  }

  static openFamilySharing() {
    return `steam://url/FamilySharing`;
  }

  static openGameHub(appId: string) {
    return `steam://url/GameHub/${appId}`;
  }

  static openGroupEventsPage(id: string) {
    return `steam://url/GroupEventsPage/${id}`;
  }

  static openGroupSteamIDPage(id: string) {
    return `steam://url/GroupSteamIDPage/${id}`;
  }

  static openGroupSteamIDAdmin(id: string) {
    return `steam://url/GroupSteamIDAdmin/${id}`;
  }

  /**
   * @deprecated
   */
  static openLeaveGroupPage() {
    return `steam://url/LeaveGroupPage`;
  }

  static openLegalInformation() {
    return `steam://url/LegalInformation`;
  }
  
  /**
   * Opens your recent steam support requests
   */
  static openMyHelpRequests() {
    return `steam://url/MyHelpRequests`;
  }

  /**
   * Opens the Family View page from Store -> Account.
   */
  static openParentalSetup() {
    return `steam://url/ParentalSetup`;
  }

  static openPrivacyPolicy() {
    return `steam://url/PrivacyPolicy`;
  }

  /**
   * Opens the Steam Subscriber Agreement
   */
  static openSSA() {
    return `steam://url/SSA`;
  }

  static openSteamIDAchievementsPage(id: string) {
    return `steam://url/SteamIDAchievementsPage/${id}`;
  }

  static openSteamIDControlPage() {
    return `steam://url/SteamIDControlPage`;
  }

  static openSteamIDEditPage() {
    return `steam://url/SteamIDEditPage`;
  }

  static openSteamIDFriendsPage() {
    return `steam://url/SteamIDFriendsPage`;
  }

  /**
   * Opens the internal automatic sign in page. It won't work unless the correct one-time password is specified.
   * @param pass Correct OTP
   */
  static openSteamIDLoginPage(pass: string) {
    return `steam://url/SteamIDLoginPage/${pass}`;
  }

  static openSteamIDMyProfile() {
    return `steam://url/SteamIDMyProfile`;
  }

  static openSteamIDPage(id: string) {
    return `steam://url/SteamIDPage/${id}`;
  }

  static openSteamWorkshop() {
    return `steam://url/SteamWorkshop`;
  }

  static openSteamWorkshopPage(id: string) {
    return `steam://url/SteamWorkshopPage/${id}`;
  }

  static openSteamGreenlight() {
    return `steam://url/SteamGreenlight`;
  }

  static openStore() {
    return `steam://url/Store`;
  }

  static openStoreAccount() {
    return `steam://url/StoreAccount`;
  }

  static openStoreAppPage(appId: string) {
    return `steam://url/StoreAppPage/${appId}`;
  }

  /**
   * Opens the store page showing all DLC available for the provided app id
   * @param appId The application's app ID
   */
  static openStoreDLCPage(appId: string) {
    return `steam://url/StoreDLCPage/${appId}`;
  }

  static openStoreCart() {
    return `steam://url/StoreCart`;
  }

  static openStorefront() {
    return `steam://url/StoreFrontPage`;
  }

  static openSupportFrontPage() {
    return `steam://url/SupportFrontPage`;
  }
}
