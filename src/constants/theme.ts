interface Theme {
    isDarkModeEnabled: boolean;
  }
// Class holding all colors used in the app
export class DeboundColor {
    // Text colors
    static textColorLight = 'text-black';
    static textColorDark = 'text-white';
    static textDarkGrey = 'text-gray-700';
    static textGrey = 'text-gray-900';
    // Font colors
    static font1 = 'text-white';
    static font2 = 'text-gray-500';
    static lightFont1 = 'text-black';
    static lightFont2 = 'text-gray-600';
  
    // Color palette
    static accentColor = 'bg-yellow-200';
    static primaryOrange = 'bg-orange-500';
    static lightGrey = 'bg-gray-300';
    static lightOrange = 'bg-yellow-300';
  
    // Background colors
    static backgroundGrey = 'bg-gray-800';
    static backgroundBlack = 'bg-black';
  
    static background1 = 'bg-gray-900';
    static background2 = 'bg-gray-800';
    static background3 = 'bg-gray-700';
    static background4 = 'bg-gray-600';
    static background5 = 'bg-gray-500';
  
    static lightBackground1 = 'bg-white';
    static lightBackground2 = 'bg-gray-100';
    static lightBackground3 = 'bg-gray-200';
    static lightBackground4 = 'bg-gray-300';
    static lightBackground5 = 'bg-gray-400';
  
    // Home colors
    // Navigation rail colors
    static navigationRailSelectedTextColor = 'text-black';
    static navigationRailTextColor = 'text-white';
    static navigationRailColor = 'bg-white';
  
    // Profile colors
    // Profile card social Colors
    static profileCardPhone = 'bg-green-500';
    static profileCardEmail = 'bg-red-500';
    static profileCardTeams = 'bg-indigo-500';
    static profileCardLinkedin = 'bg-blue-500';
  
    // Leave colors
    // Leave type colors
    static leaveTypeSick = 'bg-green-500';
    static leaveTypeCasual = 'bg-indigo-700';
    static leaveTypePriviledge = 'bg-yellow-500';
    static leaveTypeBereavement = 'bg-red-500';
    static leaveTypeUnpaid = 'bg-gray-700';
  
    // SRF Status Card Button Colors
    static srfStatusCardButtonResolve = 'bg-red-500';
    static srfStatusCardButtonTrack = 'bg-green-500';
  
    // SRF Status Card Stage Colors
    static srfStatusCardStageQuery = 'bg-red-500';
    static srfStatusCardStageInProgress = 'bg-yellow-500';
    static srfStatusCardStageDone = 'bg-green-500';
  
    // SRF query colors
    static srfQueryButtonAccept = 'bg-green-500';
    static srfQueryButtonReject = 'bg-red-500';
  
    // Button colors
    static approvalBarButtonSelectedHover = 'bg-yellow-500';
    static approvalBarButtonHover = 'bg-gray-700';
  
    // Line Divider colors
    static dividerDark = 'bg-gray-700';
  
    // SRF Action Bubble
    static srfActionBubble = 'bg-gray-700';
  
    // Snackbar
    static snackbarSuccess = 'bg-green-500';
    static snackbarFailure = 'bg-red-500';
  
    static getBackgroundColor = (theme: Theme) => {
      return theme.isDarkModeEnabled ? DeboundColor.background1 : DeboundColor.lightBackground1;
    };
  
    // Add other color getters here...
  }